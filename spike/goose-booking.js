// setting connection parameters
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

// new booking instance
// var testBooking = new Booking();
var testBooking = new Booking({
  conference: "WDI",
  speaker: "JB",
  seat: 1,
  seatScore: 100,
  bookedBy: "@bairstow"
});

// console.log("ID: ", testBooking.id);
console.log("Test booking: ", testBooking);
// console.log("Speaker: ", testBooking.speaker);
