from fastapi.testclient import TestClient
from backend.src.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_chat_endpoint_new_session():
    response = client.post("/chat", json={"question": "What is AI?"})
    assert response.status_code == 200
    assert "session_id" in response.json()
    assert "answer" in response.json()
    assert "You asked: 'What is AI?'" in response.json()["answer"]

def test_chat_endpoint_with_selected_text():
    response = client.post("/chat", json={"question": "Explain this", "selected_text": "AI is a field of computer science."})
    assert response.status_code == 200
    assert "session_id" in response.json()
    assert "answer" in response.json()
    assert "About the selected text: 'AI is a field of computer science.'" in response.json()["answer"]