import React, { useState } from 'react';
import axios from 'axios';

function AddAuthor() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter an author name.");

    axios.post('https://dc-cep-1.onrender.com/authors', { name })
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
