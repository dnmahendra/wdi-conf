var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var clearDishes = function(db, callback) {
  db.collection('dishes').drop( function(err, result) {
    assert.equal(err, null);
    console.log("Dishes collection dropped.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  clearDishes(db, function() {
      db.close();
  });
});
