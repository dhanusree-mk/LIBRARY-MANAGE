import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/api/books");
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <b>{book.title}</b> - {book.author} ({book.year})
            <button onClick={() => deleteBook(book._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
