const { Router } = require("express");
const _ = require("lodash");
const router = Router();
const books = require("./books.json");

router.get("/books", (req, res) => {
  res.json(books);
});

router.post("/books", (req, res) => {
  const { title, author, year } = req.body;
  if (title && author && year) {
    const newBook = { ...req.body };
    books.push(newBook);
    res.json({ added: "successful" });
  } else {
    res.status(400).json({ statusCode: "bad request" });
  }
});

router.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  _.remove(books, (book) => {
    if (book.id == id) {
      return book.id == id;
    } else {
      res.status(400).json({ statusCode: "bad request" });
    }
  });
});

router.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const { title, author, year } = req.body;
  _.each(books, (book) => {
    if (book.id == id) {
      book.title = title;
      book.author = author;
      book.year = year;
      res.json({ modified: "successful" });
    } else {
      res.status(400).json({ statusCode: "bad request" });
    }
  });
});

module.exports = router;
