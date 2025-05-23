const Book = require('../model/Book');

exports.createBooking = async (req, res) => {
  try {
    //  console.log("Utilisateur connecté :", req.user); 
    const newBooking = await Book.create({ ...req.body, user: req.user._id || req.user.id });
    res.status(200).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getMyBookings = async (req, res) => {
  try {
     console.log('User ID in getMyBookings:', req.user._id || req.user.id); 
    const userId = req.user._id || req.user.id;
    // On récupère les réservations de l'utilisateur en "peuplant" les infos du produit lié
    const myBooks = await Book.find({ user: userId }).populate('product');
    console.log('Bookings found:', myBooks.length); 
    res.status(200).json({ myBooks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
