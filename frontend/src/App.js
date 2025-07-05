import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import "./style.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Book List</Link>
        <Link to="/add">Add Book</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
