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

const io = require('socket.io')(server,{
    allowEI03:true//to avoid version mismatch
})

var userConnection = [];
io.on("connection",(socket)=> {
    console.log("Socket id is", socket.id)
    socket.on("userconnect",(data)=>{
        userConnection.push({
            connectionId: socket.id,
            user_id: data.displayName
        }    
        );

    })
})