import express from "express";
import Carrer from "../models/Carrer.js"; 

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const newCarrer = new Carrer(req.body);
    const saved = await newCarrer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});





router.get("/", async (req, res) => {
  try {
    const all = await Carrer.find();
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const single = await Carrer.findById(req.params.id);
    if (!single) return res.status(404).json({ message: "Not found" });
    res.status(200).json(single);
  } catch (err) {
    res.status(500).json({ error: err.message });
    
    
  }
});


router.put("/:id", async (req, res) => {
  try {
    const updated = await Carrer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Carrer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;