var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define a booking Schema
var bookingSchema = new Schema({
  conference: String,
  speaker: String,
  date: { type: Date, default: Date.now },
  seat: Number,
  seatScore: Number,
  bookedBy: String
}, {
  autoIndex: true,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

// create a Booking model class
var Booking = mongoose.model('Booking', bookingSchema);

router.get('/bookings', function(req, res) {
  Booking.find({}, function(err, results) {
    console.log('Mongoose document query method callback executed.');
    console.log(results);
    res.send(results);
  });
});

router.get('/add', function(req, res) {
  var testBooking = new Booking({
    conference: "WDI",
    speaker: "JB",
    seat: 1,
    seatScore: 100,
    bookedBy: "@bairstow"
  });
  testBooking.save( function() {
    console.log('Mongoose document save method callback executed.');
  });
  res.send('document added');
});

module.exports = router;
