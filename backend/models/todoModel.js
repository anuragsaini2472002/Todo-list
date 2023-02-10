const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    
    taskName: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('ToDo', todoSchema);