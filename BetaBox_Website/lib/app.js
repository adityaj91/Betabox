//not working right now
//ip: 104.236.168.166
//username: root
//password: Betab0x
//db to test for now is users

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://username:password@104.236.168.166/users', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});