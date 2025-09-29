// routes/review.js
import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// Customer submits a review
router.post("/", async (req, res) => {
  try {
    const { name, rating, message } = req.body;
    const review = new Review({ name, rating, message });
    await review.save();
    res.status(201).json({ message: "Review submitted. Pending approval." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Public: Get approved reviews (latest 5)
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(5);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: Get all reviews
router.get("/admin", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin: Approve a review
router.patch("/:id/approve", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Admin: Delete a review
router.delete("/:id", async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
