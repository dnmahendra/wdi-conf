var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var aggregateDishes = function(db, callback) {
  db.collection('dishes').aggregate(
      [ { $group: { "_id": "$type" } } ]
    ).toArray(function(err, result) {
    assert.equal(err, null);
    console.log(result);
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateDishes(db, function() {
      db.close();
  });
});
