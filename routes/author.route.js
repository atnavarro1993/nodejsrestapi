
const { Router } = require("express");
const _ = require("lodash");
const router = Router();
const authors = require("./authors.json");
const books = require("./books.json");


router.get("/authors", (req, res) => {
  res.json(authors);
});

router.post("/authors", (req, res) => {
  const { name, lastName, numberOfBooks } = req.body;
  if (name && lastName) {
    const newAuthor = { ...req.body };
    newAuthor.numberOfBooks = 0;
    authors.push(newAuthor);
    res.json({ added: "successful" });
  } else {
    res.status(400).json({ statusCode: "bad request" });
  }
});

router.delete("/authors/:id",(req,res)=>{
  const id = req.params.id;
  _.remove(authors,(author)=>{
    return author.id == id;
  });
  for (let i = 0; i < books.length; i++) {
    if(books[i].authorid == id){
      books.splice(i,1);
    }
  }
  res.json({deleted:"ok"});
});


router.put("/authors/:id", (req, res) => {
  const id = req.params.id;
  const { name, lastName } = req.body;
  _.each(authors, (author) => {
    if (author.id == id) {
      author.name = name;
      author.lastName = lastName;
      res.json({ modified: "successful" });
    } else {
      res.status(400).json({ statusCode: "bad request" });
    }
  });
});
module.exports = router;
