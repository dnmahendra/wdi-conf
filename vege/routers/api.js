var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose schema and model definitions for the booking process
// currently working on premise that collection defines a single conference/event but that
// could be expanded to handle bookings for multiple events (or maybe multiple talks for
// a single conference) by adding functionality that updates the collection being written to.
// define a booking Schema
var bookingSchema = new Schema({
  conference: String,
  date: { type: Date, default: Date.now },
  seat: Number,
  seatScore: Number,
  attendee: String
}, {
  autoIndex: true,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
// create a Booking model class
var Booking = mongoose.model('Booking', bookingSchema);

var getBookings = function(req, res, next) {
  Booking.find({}, function(err, bookings) {
    console.log('Mongoose document query for bookings executed.');
    req.bookings = bookings;
    return next();
  });
};

var deleteBookingById = function(req, res, next) {
  Booking.remove({'_id': req.booking._id}, function() {
    console.log('Mongoose document removed with id: ', req.booking._id);
  });
};

router.param('id', function(req, res, next, id) {
  Booking.findById(id, function (err, booking) {
    req.booking = booking;
    return next();
  });
});

// retrieve all bookings
router.route('/bookings')
.get(getBookings, function(req, res, next) {
  console.log('Returning all current bookings.');
  res.send(req.bookings);
});

// add a booking input to the db via post (i.e. a new booking is being made)
router.route('/bookings/new')
.post(function(req, res, next) {
  console.log('Creating a new booking.');
  // to be updated with posted data.
  var testBooking = new Booking({
    conference: "WDI5",
    seat: Math.ceil(Math.random() * 40),
    seatScore: Math.ceil(Math.random() * 100),
    attendee: "@Cake_Pudding"
  });
  testBooking.save( function() {
    console.log('Mongoose document save method callback executed.');
  });
  res.send();
});

// retrieve individual bookings by id
router.route('/bookings/:id')
.get(function(req, res, next) {
  console.log('Displaying booking with id: ', req.booking._id);
  res.send(req.booking);
})
.put(function(req, res, next) {
  console.log('Updating booking with id: ', req.booking._id);
  res.send();
})
.delete(deleteBookingById, function(req, res, next) {
  console.log('Deleting booking with id: ', req.booking._id);
  res.send();
});

module.exports = router;
