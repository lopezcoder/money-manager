const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const notification = new Schema({
    notification_name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    notification_date: {
        type: Date,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    is_attended: {
        type: Boolean,
        required: true
    }
    /*,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }*/
});

module.exports = mongoose.model('Notification', notification, 'notifications');