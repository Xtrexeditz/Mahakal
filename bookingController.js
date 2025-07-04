
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { fullName, travelDate, busId } = req.body;
  const booking = new Booking({ fullName, travelDate, busId });
  await booking.save();
  res.json(booking);
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find().populate('busId');
  res.json(bookings);
};
