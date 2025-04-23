const mongoose = require("mongoose")

const packgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: [String],
      },
    packageNumber: {
        type: [{
            number: Number,
            unavailableDates: [Date],
        },
    ],
    },
});

module.exports = mongoose.model("Package",packgeSchema );