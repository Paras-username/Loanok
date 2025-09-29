// routes/cibil.js
import express from "express";
import CibilRequest from "../models/Cibil.js";

const router = express.Router();

// POST - Save user details for CIBIL check
router.post("/check", async (req, res) => {
  try {
    const { name, dob, pan, phone, email } = req.body;

    // Save into MongoDB
    const newRequest = new CibilRequest({
      name,
      dob,
      pan,
      phone,
      email
    });

    await newRequest.save();

    res.status(201).json({ message: "Details submitted successfully", data: newRequest });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


// Fetch all CIBIL requests (Admin side)
router.get("/fetch", async (req, res) => {
  try {
    const requests = await CibilRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});




export default router;
