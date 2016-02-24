var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var updateDishes = function(db, callback) {
  db.collection('dishes').updateOne(
    { "name": "cake" },
    { $set: { "type": "crumble" } },
    function(err, result) {
    assert.equal(err, null);
    console.log('updated a dish');
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  updateDishes(db, function() {
      db.close();
  });
});
