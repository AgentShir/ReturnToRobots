const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express');
const MongoDB = require('mongodb')
const MongoClient = MongoDB.MongoClient

const url = "mongodb://localhost:27017/LinkedIn4Robots"

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get("/", function(req, res next){
  res.render("index")
})

app.use(express.static(path.join(>>))

app.listen(3000, function(){
  console.log("App running on port 3000")
})
