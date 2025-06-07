// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import './App.css';

const App = () => {
  const posts = [
    {
      id: 1,
      username: 'priya_cutie',
      imageUrl: '/img1.jpeg',
      caption: 'Great post!',
      initialLikes: 5,
      profilePic: '/img1.jpeg',
    },
    {
      id: 2,
      username: 'niranjana_sathyamurthy',
      imageUrl: '/img2.jpeg',
      caption: 'Awesome content!',
      initialLikes: 10,
      profilePic: '/img2.jpeg',
    },
    {
      id: 3,
      username: 'DaD_little_princess',
      imageUrl: 'img3.jpeg',
      caption: 'Let’s plan a trip!',
      initialLikes: 7,
      profilePic: '/img3.jpeg',
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
            initialLikes={post.initialLikes}
            profilePic={post.profilePic}
          />
        ))}
      </div>
    </div>
  );
};

export default App;