var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;

var url = "mongodb://localhost:27017/LinkedIn4Bots";

MongoClient.connect(url, function(error, db) {

  if (error) {
    console.log(error);
  }
  else {
    console.log("Connection Capital, Captain!");
  }

  let query = {}
  db.collection("users").find(query, function(error, userDocuments) {
    if (error) {
      console.log("Error fetching the fetching users");
    }
    else {
      console.log(userDocuments);
    }
});

  db.close();

});
