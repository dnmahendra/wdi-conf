var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var insertDocument = function(db, callback) {
   db.collection('dishes').insertOne( {
     "name": "cake",
     "type": "pudding",
     "id": 3065
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the dishes collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
