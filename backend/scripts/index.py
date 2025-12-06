import os
import re
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from sentence_transformers import SentenceTransformer

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
COLLECTION_NAME = "textbook_content"

def get_md_files(path):
    """
    Recursively gets all markdown files from a given path.
    """
    files = []
    for dirpath, dirnames, filenames in os.walk(path):
        for filename in [f for f in filenames if f.endswith(".md")]:
            files.append(os.path.join(dirpath, filename))
    return files

def chunk_text(text, chunk_size=1000, overlap=200):
    """
    Splits text into chunks of a given size with overlap.
    """
    chunks = []
    for i in range(0, len(text), chunk_size - overlap):
        chunks.append(text[i:i + chunk_size])
    return chunks

def main():
    """
    Main function to index the textbook content.
    """
    client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
    model = SentenceTransformer('all-MiniLM-L6-v2')

    docs_path = "../frontend/docs"
    md_files = get_md_files(docs_path)

    for file_path in md_files:
        with open(file_path, 'r') as f:
            content = f.read()
            chunks = chunk_text(content)
            
            embeddings = model.encode(chunks)
            
            client.upload_collection(
                collection_name=COLLECTION_NAME,
                vectors=embeddings,
                payload=[{"source": file_path, "text": chunk} for chunk in chunks],
                ids=None,  # auto-generate ids
                batch_size=256
            )
            print(f"Indexed {len(chunks)} chunks from {file_path}")

if __name__ == "__main__":
    main()
