const { Router } = require("express");
const _ = require("lodash");
const router = Router();
const authors = require("./authors.json");
const books = require("../books/books.json");
function updateNumOfBooks(authors, books) {
  for (let i = 0; i < authors.length; i++) {
    for (let j = 0; j < books.length; j++) {
      if (authors[i].fullName == books[j].author) {
        authors[i].numberOfBooks += 1;
      }
    }
  }
}

router.get("/authors", (req, res) => {
  updateNumOfBooks(authors, books);
  res.json(authors);
});

module.exports = router;
