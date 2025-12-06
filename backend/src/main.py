from fastapi import FastAPI
from .api.chat import router as chat_router

app = FastAPI(
    title="AI-Native Textbook RAG API",
    version="1.0.0",
    description="""
    This is the AI-Native Textbook RAG API.
    It provides a chatbot interface for users to ask questions about the textbook content.
    The chatbot uses Retrieval-Augmented Generation (RAG) to provide answers based on the indexed content.
    """,
)

app.include_router(chat_router)

@app.get("/", summary="Root endpoint for the API")
def read_root():
    """
    Returns a simple greeting message to indicate the API is running.
    """
    return {"Hello": "World"}
