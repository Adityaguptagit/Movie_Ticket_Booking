const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: true,
  },

  timeSlot: {
    type: String,
    required: true,
  },

  seats: {
    A1: {
      type: Number,
    },
    A2: {
      type: Number,
    },
    A3: {
      type: Number,
    },
    A4: {
      type: Number,
    },
    D1: {
      type: Number,
    },
    D2: {
      type: Number,
    },
  },
});


// {
//   "movie": "Rowdy Rathore",
//   "timeSlot": "8:00",
//   "seats": {
//       "A1": 5,
//       "A2": 0,
//       "A3": 0,
//       "A4": 0,
//       "D1": 2,
//       "D2": 0
//   }
// }

module.exports = mongoose.model("Booking", bookingSchema);
