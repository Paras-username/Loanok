import express from "express";
import Document from "../models/Document.js";

const router = express.Router();

/**
 * @route POST /api/documents
 * @desc Save uploaded document URLs for a lead & bank
 */
router.post("/", async (req, res) => {
  try {
    const { leadId, bankId, employmentType, files } = req.body;

    const doc = new Document({
      leadId,
      bankId,
      employmentType,
      panCard: files.pan || "",
      idProof: files.idProof || "",
      addressProof: files.addressProof || "",
      salarySlips: files.salarySlips ? [files.salarySlips] : [],
      salariedBankStatement: employmentType === "salaried" ? files.bankStatement || "" : "",
      businessProof: files.businessProof || "",
      incomeStatement: files.incomeStatement || "",
      selfEmployedBankStatement: employmentType === "self-employed" ? files.bankStatement || "" : "",
    });

    await doc.save();
    res.status(201).json({ success: true, message: "Documents uploaded successfully", document: doc });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


/**
 * @route GET /api/documents/:leadId
 * @desc Fetch all documents for a specific lead
 */
router.get("/:leadId", async (req, res) => {
  try {
    const docs = await Document.findOne({ leadId: req.params.leadId }).populate("leadId bankId");
    if (!docs) return res.status(404).json({ success: false, message: "No documents found for this lead" });
    res.status(200).json({ success: true, documents: docs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * @route DELETE /api/documents/:id
 * @desc Delete uploaded documents record
 */
router.delete("/:id", async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Documents deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
