// const mongoose = require("mongoose")

// const bookingSchema = new mongoose.Schema({
//     packageId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Package"
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     bookingDate:{
//         type: Date,
//         required: true,
//     },
    
//     comfirmed: {
//         type: Boolean,
//         default: false,
//     },
// },
// {
//     timestamps: true,
// }
// );

// module.exports = mongoose.model("Booking", bookingSchema);

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    functionDate: { // previously "bookingDate"
      type: Date,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    paymentStatus: {
  type: String,
  default: 'unpaid',
},
paymentId: {
  type: String,
  default: null,
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
