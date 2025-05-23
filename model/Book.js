const mongoose = require ('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
},
    phone: {
            type: Number,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

}, { timestamps: true })

const Book = mongoose.model('book', bookSchema)

module.exports = Book