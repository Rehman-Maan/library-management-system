import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Change Switch to Routes
import './App.css';

import HomePage from './components/HomePage';
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';
import ViewBooks from './components/ViewBooks';
import ViewAuthors from './components/ViewAuthors';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-author">Add Author</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            <li><Link to="/view-books">View Books</Link></li>
            <li><Link to="/view-authors">View Authors</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* Replace Switch with Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/add-author" element={<AddAuthor />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/view-books" element={<ViewBooks />} />
          <Route path="/view-authors" element={<ViewAuthors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
