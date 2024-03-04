const Booking = require("../models/Booking");

const newBooking = async (req, res, next) => {
  const { movie, timeSlot, seats } = req.body;

  let booking;
  try {
    booking = new Booking({ movie, timeSlot, seats });
    booking = await booking.save();
  } catch (error) {
    return console.log(error);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unable to create a booking" });
  }
  return res.status(201).json(booking);
};

/**************************************************************************************/
const getBookingDetails = async (req, res, next) => {
  let bookingDetails;

  try {
    bookingDetails = await Booking.find();
  } catch (error) {
    return console.log(error);
  }

  if (!bookingDetails) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(200).json(bookingDetails);
};

module.exports = { getBookingDetails, newBooking };
