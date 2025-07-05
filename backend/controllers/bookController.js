const Book = require("../models/Book");

// Get all books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, year } = req.body;
  const newBook = new Book({ title, author, year });
  await newBook.save();
  res.status(201).json(newBook);
};

// Delete a book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
