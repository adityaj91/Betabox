//not working right now
// ip= 104.236.168.166
// username= root
// password= Betab0x
// db to test for now is users

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://104.236.168.166:27017/users', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
// 'mongodb:root:Betab0x@104.236.168.166/users'
// // Retrieve
// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });