import React, { useEffect, useState } from 'react';
import Chatbot from '../components/Chatbot';

function Root({ children }) {
  const [selectedText, setSelectedText] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [textForChatbot, setTextForChatbot] = useState('');

  const handleSelection = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text.length > 0 && text.length < 200) { // Limit selection length
      setSelectedText(text);
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + window.scrollX + rect.width / 2,
        y: rect.top + window.scrollY - 30, // Position above selected text
      });
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  const handleClearSelection = () => {
    // Only hide tooltip if chatbot is not visible.
    // This prevents tooltip from disappearing right after clicking "Ask Chatbot"
    if (!isChatbotVisible) {
      setShowTooltip(false);
      setSelectedText('');
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('mousedown', handleClearSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('mousedown', handleClearSelection);
    };
  }, [isChatbotVisible]); // Depend on isChatbotVisible to prevent re-attaching listeners unnecessarily

  const askChatbot = () => {
    setTextForChatbot(selectedText);
    setIsChatbotVisible(true);
    setShowTooltip(false); // Hide tooltip after action
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
    setTextForChatbot('');
  };

  return (
    <>
      {children}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          onClick={askChatbot}
        >
          Ask Chatbot about selection
        </div>
      )}
      <Chatbot selectedText={textForChatbot} isVisible={isChatbotVisible} onClose={closeChatbot} />
    </>
  );
}

export default Root;
