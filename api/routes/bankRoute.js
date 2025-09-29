import express from "express";
import Bank from "../models/Bank.js";

const router = express.Router();

// 👉 Add a new bank
router.post("/", async (req, res) => {
  try {
    const newBank = new Bank(req.body);
    await newBank.save();
    res.status(201).json({ success: true, bank: newBank });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 👉 Get all banks
router.get("/", async (req, res) => {
  try {
    const banks = await Bank.find();
    res.status(200).json(banks);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 👉 Update a bank by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBank = await Bank.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, bank: updatedBank });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 👉 Delete a bank by ID
router.delete("/:id", async (req, res) => {
  try {
    await Bank.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Bank deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
