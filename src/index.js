const express = require("express");
const morgan = require("morgan");
const router = require("../routes/index");
const app = express();

let port = 3000;
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(router);

app.listen(port,()=>{
    console.log(`server is up on ${port}`);
})