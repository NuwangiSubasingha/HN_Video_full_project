const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    packageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package"
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    bookingDate:{
        type: Date,
        required: true,
    },
    
    comfirmed: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Booking", bookingSchema);
