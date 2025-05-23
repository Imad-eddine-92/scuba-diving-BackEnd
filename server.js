const express = require('express')

require('dotenv').config()

const connectDB = require('./config/connectDB')

const app = express()

// Middleware global pour parser le JSON
app.use(express.json())

// Middleware pour désactiver la mise en cache
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

// Connect to DB
connectDB()

// Routes
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/user', require('./routes/user.route'))
app.use('/api/product', require('./routes/product.route'))
app.use('/api/bookings', require('./routes/book.route'))

// Port
const PORT = process.env.PORT || 1302

// Listen
app.listen(PORT, (err) => {
  err ? console.log("Server couldn't run 👾", err) : console.log(`Server is running on port ${PORT} 🤖`)
})
