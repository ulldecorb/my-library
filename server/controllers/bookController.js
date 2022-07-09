const Book = require('../models/Book');

function bookController() {
  async function getAll(req, res) {
    const book = await Book.find();
    res.json(book);
  }

  async function createOne(req, res) {
    const newBook = new Book(req.body);
    try {
      await newBook.save();
      res.json(newBook);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const bookID = await Book.findById(
        req.params.bookID
      );
      res.json(bookID);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.bookID,
        req.body,
        { new: true }
      );
      res.json(updatedBook);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Book.findByIdAndDelete(req.params.bookID);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = bookController;
