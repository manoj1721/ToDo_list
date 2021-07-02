var express = require("express");

var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");

var app = express();
var port = 3000;
mongoose.connect("mongodb://localhost:27017/todolist");
mongoose.connection.on("connected",()=>{
    console.log("I am connected to database");
});
app.use(cors());

app.use(bodyparser.json());

// get,post,put,delete,methods,options

app.use("/task", require("./routes/task"))

app.get("/",(req,res)=>{
    console.log("Some have send message")
    res.send("welcome to todo list");
})

app.listen(port,()=>{
    console.log("I am coding on port ::",port);
})