import React, { useState } from 'react';
import axios from 'axios';

function AddAuthor() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter an author name.");

    axios.post(' https://1c4f-111-68-109-251.ngrok-free.app/authors', { name })
      .then(response => {
        alert("Author added successfully");
        setName('');
      })
      .catch(error => {
        console.error('Error adding author:', error);
        alert("Failed to add author.");
      });
  };

  return (
    <div className="add-author">
      <h2>Add a New Author</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Author</button>
      </form>
    </div>
  );
}

export default AddAuthor;
