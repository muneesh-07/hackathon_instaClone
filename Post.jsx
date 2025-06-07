// src/components/Post.jsx
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';

const Post = ({ username, imageUrl, caption, initialLikes, profilePic }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([`${username} ${caption}`]);
  const [newComment, setNewComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
      setShowCommentInput(false);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={profilePic} alt={username} className="profile-pic" />
        <h2>{username}</h2>
      </div>
      <img className="post-image" src={imageUrl} alt="Post" />
      <div className="post-actions">
        <button onClick={handleLike} className={liked ? 'liked' : ''}>
          {liked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
        </button>
        <button onClick={() => setShowCommentInput(!showCommentInput)}>
          <FaComment size={20} />
        </button>
      </div>
      <div className="post-likes">Liked by {likes} people</div>
      <div className="post-comments">
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      {showCommentInput && (
        <div className="comment-input">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Post</button>
        </div>
      )}
    </div>
  );
};

export default Post;