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

// check correct document creation
console.log("Test booking: ", testBooking);

// setup and execute database connection
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connected to mongodb via mongoose.');
  testBooking.save( function() {
    console.log('Mongoose document save method callback executed.');
    mongoose.disconnect();
    console.log('Mongoose disconnected.');
  });
});
