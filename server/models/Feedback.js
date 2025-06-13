const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userName: String,
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },  // change from String to ObjectId ref
  comment: String,
  date: { type: Date, default: Date.now },
   name: {
    type: String,
    required: false,
  },
});


module.exports = mongoose.model("Feedback", feedbackSchema);
