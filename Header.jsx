// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleMessageClick = () => {
    navigate('/chat'); // Navigate to the chat page
  };

  return (
    <div className="header">
      <h1>BotGram</h1>
      <button onClick={handleMessageClick}>Message</button>
    </div>
  );
};

export default Header;