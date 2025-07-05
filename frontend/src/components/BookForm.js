import React, { useState } from "react";
import axios from "axios";

function BookForm() {
  const [form, setForm] = useState({ title: "", author: "", year: "" });

  const addBook = async () => {
    if (!form.title) return alert("Title is required!");
    await axios.post("http://localhost:5000/api/books", form);
    setForm({ title: "", author: "", year: "" });
    alert("Book added!");
  };

  return (
    <div className="container">
      <h2>Add a New Book</h2>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br />
      <input
        placeholder="Author"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <br />
      <input
        placeholder="Year"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
      />
      <br />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default BookForm;
