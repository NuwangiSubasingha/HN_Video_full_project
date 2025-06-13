// const mongoose = require('mongoose');

// const videoSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   videoUrl: { type: String, required: true },
//   uploadedAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Video', videoSchema);

const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Video", videoSchema);
