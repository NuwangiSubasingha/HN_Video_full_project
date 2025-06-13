// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const Video = require('../models/Video');

// const router = express.Router();

// // Multer configuration
// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, `${Date.now()}${ext}`);
//   }
// });
// const upload = multer({ storage });

// // POST: Upload video
// router.post('/', upload.single('video'), async (req, res) => {
//   try {
//     const newVideo = new Video({
//       title: req.body.title,
//       description: req.body.description,
//       videoUrl: `/uploads/${req.file.filename}`
//     });
//     await newVideo.save();
//     res.status(201).json(newVideo);
//   } catch (err) {
//     res.status(500).json({ error: 'Upload failed' });
//   }
// });

// // GET: List all videos
// router.get('/', async (req, res) => {
//   try {
//     const videos = await Video.find().sort({ uploadedAt: -1 });
//     res.json(videos);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch videos' });
//   }
// });

// module.exports = router;

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Video = require('../models/Video');

const router = express.Router();

// ✅ Ensure uploads directory exists
const uploadPath = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// ✅ Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

// ✅ POST route to upload a video
router.post('/', upload.single('video'), async (req, res) => {
  try {
    console.log('File:', req.file);
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const newVideo = new Video({
      title: req.body.title,
      description: req.body.description,
      videoUrl: `/uploads/${req.file.filename}`, // path for frontend access
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// ✅ GET route to fetch videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ uploadedAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

module.exports = router;
