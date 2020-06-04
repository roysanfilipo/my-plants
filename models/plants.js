const mongoose = require('mongoose');


const plantSchema = new mongoose.Schema(
    {
    name: {type: String, required: true },
    img: String,
    days: String,
    description: String,
    date: String
    }
);

const Plants = mongoose.model('Plants', plantSchema);

module.exports = Plants;
