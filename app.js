const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express');

var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;

var url = "mongodb://localhost:27017/LinkedIn4Bots";
var dbConn = null;

MongoClient.connect(url, function(error, db) {
  if (error) {
    console.log("Everything is NOT OKAY", error);
    }
  else {
      console.log("Connected to the Database, Yo!");
      dbConn = db;
  }
});

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'static')))

app.get("/", function(req, res, next){

  dbConn.collection("users").find().toArray(function(error, users) {
    if (error) {
      console.log("No users be found cuz of an error", error);
    }
    else {
        var model= {
          appType: "Robot LinkedIn for Robots",
          users: users
        }
        res.render("index", model)
      }
    });
  })

  res.render("index", {appType:"Express"})
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})
