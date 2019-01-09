const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const expense = new Schema({
    expense_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expense_date: {
        type: Date,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    payment_type: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Expense', expense, 'expenses');