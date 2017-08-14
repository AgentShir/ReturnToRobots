const DB
let conn = null

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log("Everything is NOT OKAY", err)
  } else {
    conn = db
  }
})

function getAllUsers(cb) {
  conn.collection('robots').find().toArray()
  function(err, documents){
    cb(documents)
  })
}

module.exports = {
  getAllUsers: getAllUsers
}
