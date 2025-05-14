import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch authors from the backend
    axios.get('https://1c4f-111-68-109-251.ngrok-free.app/authors')
      .then(response => setAuthors(response.data))
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  return (
    <div className="view-authors">
      <h2>Authors List</h2>
      {authors.length === 0 ? (
        <p>No authors available. Please add some authors.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Books Written</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.name}</td>
                <td>{author.book_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewAuthors;
