import React, { useState, useEffect } from 'react';

function Chatbot({ selectedText: initialSelectedText, isVisible, onClose }) {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [currentSelectedText, setCurrentSelectedText] = useState(initialSelectedText);

  useEffect(() => {
    if (isVisible && initialSelectedText) {
      setCurrentSelectedText(initialSelectedText);
      setQuestion(`Explain this: "${initialSelectedText}"`);
    } else if (!isVisible) {
      setQuestion('');
      setMessages([]);
      setSessionId(null);
      setCurrentSelectedText(null);
    }
  }, [isVisible, initialSelectedText]);

  const sendMessage = async () => {
    const textToSend = question.trim();
    if (!textToSend) return;

    const userMessage = { role: 'user', content: textToSend };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuestion('');

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          question: textToSend,
          selected_text: currentSelectedText, // Send the selected text
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSessionId(data.session_id);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.answer }]);
      setCurrentSelectedText(null); // Clear selected text after sending
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: 'Error: Could not get a response.' }]);
    }
  };

  if (!isVisible) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      width: '350px',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed', // Make it float
      bottom: '20px',
      right: '20px',
      backgroundColor: 'white',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
      zIndex: 1001,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <strong>Chatbot Assistant</strong>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '1.2em', cursor: 'pointer' }}>✖</button>
      </div>
      <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px', border: '1px solid #eee', padding: '5px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', margin: '5px 0' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
          </div>
        ))}
      </div>
      {currentSelectedText && (
        <div style={{ background: '#f0f0f0', padding: '5px', borderRadius: '3px', marginBottom: '5px', fontSize: '0.8em' }}>
          Context: "{currentSelectedText}"
        </div>
      )}
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Ask a question..."
        style={{ padding: '8px', borderRadius: '3px', border: '1px solid #eee', width: 'calc(100% - 16px)' }}
      />
      <button onClick={sendMessage} style={{ marginTop: '5px', padding: '8px 12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Send</button>
    </div>
  );
}

export default Chatbot;
