// src/components/AddBlog.js
import React, { useState } from 'react';
import db from '../firebase'; // Import Firestore configuration

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('blogPosts').add({
        title,
        content,
        author,
        timestamp: new Date(),
      });
      alert('Blog post added successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
      <button type="submit">Add Blog Post</button>
    </form>
  );
};

export default AddBlog;
