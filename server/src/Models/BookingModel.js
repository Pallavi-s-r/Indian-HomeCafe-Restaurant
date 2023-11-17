const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
     date: {
      type: Date, 
      required: true
    },
    time: {
      type: String, 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookings", bookingSchema); 