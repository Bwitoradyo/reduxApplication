var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//API
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bookshop");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "# MongoDB - connection erro: "));


// SETUP SESSIONS
app.use(session({
  secret: "mySecretString",
  saveUninitialized: false,
  resave: false,
  cookie: {maxAge: 1000*60*60*24*2},
  store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
}))
// SAVE TO SESSION
app.post("/cart", (req, res) => {
  var cart = req.body;
  req.session.cart = cart;
  req.session.save((err) => {
    if(err){
      throw err;
    }
    res.json(req.session.cart);
  })
})

// GET SESSION CART API
app.get("/cart", (req, res) => {
  if(typeof req.session.cart !== "undefined"){
    res.json(req.session.cart);
  }
});

// END SESSION SETUP


var Books = require("./models/books.js");

// POST BOOKS
app.post("/books", (req, res) =>{
  var book = req.body;

  Books.create(book, (err, books) => {
    if(err){
      throw err;
    }
    res.json(books);
  })
});

// GET BOOKS
app.get("/books", (req, res) => {
  Books.find((err, books) => {
    if(err){
      throw err;
    }
    res.json(books)
  })
});

// DELETE BOOKS
app.delete("/books/:_id", (req, res) => {
  var query = {_id: req.params._id}

  Books.remove(query, (err, books) => {
    if(err){
      console.log("# API DELETE BOOKS");
    }
    res.json(books);
  })
})

// UPDATE BOOKS
app.put("/books/:_id", (req, res) => {
  var book = req.body;
  var query = req.params._id;
  //if the field doesn't exist $set will set a new field
  var update = {
    "$set":{
      title:book.title,
      description:book.description,
      image:book.image,
      price:book.price,
    }
  };
  //when true returns to updated document
  var options = {new: true};
  
  Books.findOneAndUpdate(query, update, options, (err, books) => {
    if(err){
      throw err;
    }
    res.json(books);
  })
})

// GET BOOKS IMAGES API
app.get("/images", (req, res) => {
  const imgFolder = __dirname + "/public/images/";
  // Require the File System
  const fs = require("fs");
  // Read all files in the directory
  fs.readdir(imgFolder, (err, files) => {
    if(err){
      return console.log(err);
    }
    // Create and empty array
    const filesArr = [];
    // Iterate all images in the directory and add tot the array
    files.forEach((file) => {
      filesArr.push({name: file})
    });
    // Send the JSON response with the array
    res.json(filesArr)
  })
})


// END API

app.listen(3001, (err) => {
  if(err){
    return console.log(err);
  }
  console.log("API Server is listening on port 3001")
})
