// const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isAdmin:{
//     type: Boolean,
//     default: true
//     }
// } ,{
//     timestamps: true
// })

// module.exports = mongoose.model("User",userSchema)

// models/userModel.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
