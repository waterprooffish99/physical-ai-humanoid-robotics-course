# Quickstart

This guide provides instructions on how to set up and run the AI-Native Textbook project.

## Prerequisites

- Node.js (latest LTS)
- Python 3.11
- An account on [Neon](https://neon.tech/)
- An account on [Qdrant Cloud](https://qdrant.tech/)
- An account on [Render](https://render.com/)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Frontend Setup (Docusaurus):**
    ```bash
    cd frontend
    npm install
    ```

3.  **Backend Setup (FastAPI):**
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

4.  **Environment Variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```
    NEON_DATABASE_URL=<your-neon-database-url>
    QDRANT_API_KEY=<your-qdrant-api-key>
    QDRANT_URL=<your-qdrant-url>
    ```

## Running the Project

1.  **Start the Docusaurus frontend:**
    ```bash
    cd frontend
    npm start
    ```
    The textbook website will be available at `http://localhost:3000`.

2.  **Start the FastAPI backend:**
    ```bash
    cd backend
    uvicorn src.main:app --reload
    ```
    The RAG API will be available at `http://localhost:8000`.

## Indexing Content

To index the textbook content into Qdrant, run the indexing script:
```bash
cd backend
python scripts/index.py
```
This script will chunk the Markdown files, generate embeddings, and store them in Qdrant Cloud. This needs to be run whenever the content of the textbook changes.
