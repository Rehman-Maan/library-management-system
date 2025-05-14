import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddBook() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', genre: '', pages: '', author_id: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/authors')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author_id) return alert("Title and Author are required.");

    axios.post('http://localhost:5000/books', newBook)
      .then(response => {
        alert("Book added successfully");
        setNewBook({ title: '', genre: '', pages: '', author_id: '' });
      })
      .catch(error => {
        console.error('Error adding book:', error);
        alert("Failed to add book.");
      });
  };

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Book Genre"
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          value={newBook.pages}
          onChange={handleInputChange}
        />
        <select
          name="author_id"
          value={newBook.author_id}
          onChange={handleInputChange}
        >
          <option value="">Select Author</option>
          {books.map((author) => (
            <option key={author.id} value={author.id}>{author.name}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
