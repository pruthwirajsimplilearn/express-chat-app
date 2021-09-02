
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    sender: {
        type: String, 
        required: true, 
        max: 100
    },
    message: {
        type: String, 
        required: true
    },
    ctime:{
        type: Date
    }
});

// Export the model
module.exports = mongoose.model('chat', ChatSchema);