from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
import uuid
import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from sentence_transformers import SentenceTransformer
from sqlalchemy.orm import Session
from ..core.database import get_db, ChatSession, ChatMessage

load_dotenv()

router = APIRouter()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
COLLECTION_NAME = "textbook_content"

# Initialize Qdrant Client and Sentence Transformer
qdrant_client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
sentence_transformer_model = SentenceTransformer('all-MiniLM-L6-v2')

class ChatRequest(BaseModel):
    session_id: Optional[uuid.UUID] = None
    question: str
    selected_text: Optional[str] = None

class ChatResponse(BaseModel):
    session_id: uuid.UUID
    answer: str

def get_llm_response(question: str, context: str, selected_text: Optional[str] = None) -> str:
    """
    Placeholder for LLM interaction. In a real scenario, this would call an LLM API.
    """
    response = f"Based on the context:\n'{context}'\n\nYou asked: '{question}'.\n"
    if selected_text:
        response += f"And you highlighted: '{selected_text}'.\n"
    response += "LLM placeholder: This is where the LLM would generate a detailed answer."
    return response

@router.post("/chat", response_model=ChatResponse, summary="Chat with the AI textbook assistant")
async def chat_endpoint(request: ChatRequest, db: Session = Depends(get_db)):
    """
    Handles user chat requests. 
    
    If no session_id is provided, a new chat session is created.
    The user's question is used to retrieve relevant context from Qdrant.
    An LLM (placeholder) then generates an answer based on the question and context.
    Both the user's question and the assistant's answer are persisted to the database.
    If `selected_text` is provided, it is included in the context for the LLM.
    """
    session_id = request.session_id
    if session_id is None:
        # Create a new session
        new_session = ChatSession()
        db.add(new_session)
        db.commit()
        db.refresh(new_session)
        session_id = new_session.session_id
    else:
        # Check if session exists
        session = db.query(ChatSession).filter(ChatSession.session_id == session_id).first()
        if not session:
            raise HTTPException(status_code=404, detail="Session not found")
    
    # Save user message
    user_message = ChatMessage(session_id=session_id, role="user", content=request.question)
    db.add(user_message)
    db.commit()
    db.refresh(user_message)

    # 1. Generate embedding for the question
    question_embedding = sentence_transformer_model.encode(request.question).tolist()
    
    # 2. Query Qdrant for relevant context
    search_result = qdrant_client.search(
        collection_name=COLLECTION_NAME,
        query_vector=question_embedding,
        limit=3 # Retrieve top 3 relevant chunks
    )
    
    context = ""
    for hit in search_result:
        context += hit.payload.get("text", "") + "\n"
    
    # 3. Get LLM response
    answer = get_llm_response(request.question, context, request.selected_text)
    
    # Save assistant message
    assistant_message = ChatMessage(session_id=session_id, role="assistant", content=answer)
    db.add(assistant_message)
    db.commit()
    db.refresh(assistant_message)

    return ChatResponse(session_id=session_id, answer=answer)
