const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const Package = require("../models/packageModel");

// Correctly import auth from your middleware object export
const { auth } = require("../middleware/authMiddleware");

// POST - Only logged in user
router.post("/", auth, async (req, res) => {
  const { packageId, comment,name } = req.body;
  try {
    const feedback = new Feedback({
      userId: req.user._id,
      userName: req.user.name,
      name,
      packageId,
      comment,
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted" });
  } catch {
    res.status(500).json({ error: "Submission failed" });
  }
});

// GET - Everyone
router.get("/package/:packageId", async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ packageId: req.params.packageId }).sort({ date: -1 });
    res.json(feedbacks);
  } catch {
    res.status(500).json({ error: "Fetch error" });
  }
});

// GET all feedback from all users for all packages
router.get("/", async (req, res) => {
  try {
    // populate packageId with only the name field
    const feedbacks = await Feedback.find()
      .sort({ date: -1 })
      .populate({ path: "packageId", select: "name" }); 

    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});



module.exports = router;
