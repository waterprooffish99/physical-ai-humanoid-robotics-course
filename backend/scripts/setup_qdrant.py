import os
from dotenv import load_dotenv
from qdrant_client import QdrantClient, models

load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

def setup_qdrant_collection():
    """
    Sets up the Qdrant collection for the textbook.
    """
    client = QdrantClient(url=QDRANT_URL, api_key=QDRANT_API_KEY)
    
    COLLECTION_NAME = "textbook_content"
    
    try:
        client.get_collection(collection_name=COLLECTION_NAME)
        print(f"Collection '{COLLECTION_NAME}' already exists.")
    except Exception:
        client.recreate_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=models.VectorParams(size=384, distance=models.Distance.COSINE),
        )
        print(f"Collection '{COLLECTION_NAME}' created.")

if __name__ == "__main__":
    setup_qdrant_collection()
