const express = require("express");
const bookingController = require("../controllers/booking-controllers");

const bookingRouter = express.Router();

bookingRouter.get("/booking", bookingController.getBookingDetails);
bookingRouter.post("/booking", bookingController.newBooking);

module.exports = bookingRouter;
