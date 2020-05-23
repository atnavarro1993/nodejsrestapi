const {Router} = require("express");
const router = Router();
const books = require('./books/books.route');

router.use('/api',books);

module.exports = router;
