const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const income = new Schema({
    income_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    quantity: {
        type: Number,
        required: true
    },
    income_date: {
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

module.exports = mongoose.model('Income', income, 'incomes');