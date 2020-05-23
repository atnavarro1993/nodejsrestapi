const {Router} = require("express");
const _ = require("lodash");
const router = Router();
const authors = require("./authors.json")

router.get("/authors",(req,res)=>{
    res.json(authors);
})

module.exports = router;