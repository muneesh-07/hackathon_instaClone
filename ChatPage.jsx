// src/components/ChatPage.jsx
import React, { useState } from 'react';
import ChatInterface from './ChatInterface';

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      username: 'priya_cute',
      lastMessage: 'Hey! How are you?',
      profilePic: '/img1.jpeg',
    },
    {
      id: 2,
      username: 'techie_programmer',
      lastMessage: 'Check out this new post!',
      profilePic: '/img2.jpeg',
    },
    {
      id: 3,
      username: 'travel_lover',
      lastMessage: 'Let’s plan a trip!',
      profilePic: '/img3.jpeg',
    },
  ];

  return (
    <div className="chat-page">
      <h1>Chat</h1>
      {selectedChat ? (
        <ChatInterface
          username={selectedChat.username}
          profilePic={selectedChat.profilePic}
          onBack={() => setSelectedChat(null)} // Add a back button to return to the chat list
        />
      ) : (
        <div className="chat-list">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="chat-item"
              onClick={() => setSelectedChat(chat)} // Set the selected chat when clicked
            >
              <img src={chat.profilePic} alt={chat.username} className="profile-pic" />
              <div className="chat-info">
                <p className="username">{chat.username}</p>
                <p className="last-message">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatPage;