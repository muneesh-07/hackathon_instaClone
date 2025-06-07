// src/components/ChatInterface.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const ChatInterface = ({ username, profilePic, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Function to simulate a response from the opposite person
  const simulateResponse = () => {
    setTimeout(() => {
      if (username === 'priya_cute') {
        // Simulate a text and photo response for the first profile
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'text', text: 'Here are the photos you asked for!', sender: username },
          { type: 'image', url: '/img4.jpeg', sender: username },
          { type: 'image', url: '/img5.jpeg', sender: username },
        ]);
      } else {
        // Simulate a text response for other profiles
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'text', text: 'Hi Bitch.', sender: username },
        ]);
      }
    }, 1000); // 1-second delay for the response
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add the sender's message
      setMessages([...messages, { type: 'text', text: newMessage, sender: 'You' }]);
      setNewMessage('');

      // Simulate a response from the opposite person
      simulateResponse();
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <button onClick={onBack} className="back-button">
          <FaArrowLeft size={20} />
        </button>
        <img src={profilePic} alt={username} className="profile-pic" />
        <h2>{username}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}
          >
            {message.type === 'text' ? (
              <p>{message.text}</p>
            ) : (
              <img src={message.url} alt="Photo" className="chat-photo" />
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatInterface;