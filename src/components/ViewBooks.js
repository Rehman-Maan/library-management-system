import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the backend
    axios.get('https://1c4f-111-68-109-251.ngrok-free.app/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="view-books">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books available. Please add some books.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Pages</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>{book.pages}</td>
                <td>{book.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewBooks;
