
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  fullName: String,
  travelDate: Date,
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
