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

// create holder for returned info
var queryResults = null;

// setup and execute database query
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connected to mongodb via mongoose.');
  Booking.find({}, function(err, results) {
    console.log('Mongoose document query method callback executed.');
    mongoose.disconnect();
    console.log('Mongoose disconnected.');
    console.log(results);
  });
});
