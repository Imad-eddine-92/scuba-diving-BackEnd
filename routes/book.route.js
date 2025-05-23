
const express = require('express');
const { createBooking, getMyBookings } = require('../controllers/book.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Booking route is working!' });
});

// Ajouter une réservation (POST /api/bookings)
router.post('/', authMiddleware, createBooking);

// Récupérer mes réservations (GET /api/bookings/mybooks)
router.get('/mybooks', authMiddleware, getMyBookings);

module.exports = router;
