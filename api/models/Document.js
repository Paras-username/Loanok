import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    leadId: { type: mongoose.Schema.Types.ObjectId, ref: "Lead", required: true },
    bankId: { type: mongoose.Schema.Types.ObjectId, ref: "Bank", required: true },

    // Common for all customers
    panCard: { type: String },           // Cloudinary URL
    idProof: { type: String },           // Cloudinary URL
    addressProof: { type: String },      // Cloudinary URL

    // Salaried-only docs
    salarySlips: [{ type: String }],     // Array in case of multiple months
    salariedBankStatement: { type: String },

    // Self-employed-only docs
    businessProof: { type: String },
    incomeStatement: { type: String },
    selfEmployedBankStatement: { type: String },

    // Track type (helps frontend know which set to show)
    employmentType: { type: String, enum: ["salaried", "self-employed"], required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);
