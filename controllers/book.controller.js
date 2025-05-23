const Book = require('../model/Book');

exports.createBooking = async (req, res) => {
  try {
    const newBooking = await Book.create({ ...req.body, user: req.user._id || req.user.id });
    res.status(200).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;
    const myBooks = await Book.find({ user: userId });
    res.status(200).json({ myBooks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
