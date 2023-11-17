const bookingModel = require('../Models/BookingModel');

const booking = async (req, res) => {
  try {
    const data = req.body;
    const tableBooking = await bookingModel.create(data);
    return res.send({ success: true, message: "your booking is done" , data: tableBooking});
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

const getRecord = async (req, res) => {
  try {
    const data = await bookingModel.find();
    return res.send({ success: true, message: data });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = { booking, getRecord };
