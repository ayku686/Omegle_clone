const express = require("express");
const path = require("path");
const bodyparser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app=express();

app.use(bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json());

app.set("view engine","ejs");

app.use(express.static("Assets"));
app.use(express.static("Views"));
app.use("/",require("./Server/Routes/router"))

var server = app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})