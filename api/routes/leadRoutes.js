// routes/leadRoutes.js
import express from "express";
import Lead from "../models/Lead.js";
import Document from "../models/Document.js";
import Bank from "../models/Bank.js";

const router = express.Router();

// POST /api/leads → Save new lead
router.post("/", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ success: true, lead });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// GET /api/leads → Fetch all leads
router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find().lean(); // get all leads

    // For each lead, fetch bank & documents
    const data = await Promise.all(
      leads.map(async (lead) => {
        const documents = await Document.find({ leadId: lead._id }).lean();
        const bankIds = documents.map((doc) => doc.bankId);
        const banks = await Bank.find({ _id: { $in: bankIds } }).lean();
        return {
          ...lead,
          banks,       // all banks related to this lead
          documents,   // all documents for this lead
        };
      })
    );

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
