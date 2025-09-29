import express from "express";
import Bank from "../models/Bank.js";

const router = express.Router();


// 👉 Check loan eligibility
router.post("/", async (req, res) => {
  try {
    const lead = req.body;

    // Step 1: Fetch all banks matching loanType
    let banks = await Bank.find({ loanType: lead.loanType });

    // Normalize employmentType (lowercase)
    const empType = lead.employmentType?.toLowerCase();

    // Step 2: Apply filters
    let eligibleBanks = banks.filter((bank) => {
      if (empType === "salaried") {
        const salary = Number(lead.salariedDetails?.monthlySalary || 0);
        return salary >= bank.minSalary;
      } else if (empType === "self-employed") {
        const turnover = Number(lead.selfEmployedDetails?.annualTurnover || 0);
        return turnover >= bank.minSalary;
      }
      return false;
    });

    // Step 3: Respond
    if (eligibleBanks.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No eligible banks found. Try another loan type.",
        banks: [],
      });
    }

    res.status(200).json({ success: true, banks: eligibleBanks });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});


export default router;
