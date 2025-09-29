import mongoose from "mongoose";

const BankSchema = new mongoose.Schema({
  loanType: {
    type: String,
    required: true, // personal, home, business, LAP
  },
  bankName: {
    type: String,
    required: true,
  },
  minSalary: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number, // in %
    required: true,
  },
  processingFee: {
    type: Number, // in %
    required: true,
  },
  maxLoanAmount: {
    type: Number, // e.g., 10000000 for 1 crore
    required: true,
  },
  tenureRange: {
    min: { type: Number, required: true }, // in months
    max: { type: Number, required: true }, // in months
  },
  logoUrl: {
    type: String, // image link
  },
}, { timestamps: true });

export default mongoose.model("Bank", BankSchema);
