import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    // 🔹 Common fields
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    loanType: {
      type: String,
      enum: ["personal", "home", "business", "lap"],
      required: true,
    },
    loanAmount: { type: Number, required: true },

    // 🔹 Employment type
    employmentType: {
      type: String,
      enum: ["salaried", "self-employed"],
      required: true,
    },

    // 🔹 Salaried details
    salariedDetails: {
      companyName: { type: String },
      monthlySalary: { type: Number },
      employerType: { type: String }, // "MNC", "Govt", "Private"
      salaryCreditMethod: { type: String }, // "Bank Transfer" / "Cash"
    },

    // 🔹 Self-employed details
    selfEmployedDetails: {
      businessName: { type: String },
      businessVintage: { type: Number }, // years
      annualTurnover: { type: Number },
    },

    // 🔹 Status tracking (for admin panel later)
    status: {
      type: String,
      enum: ["new", "in-review", "eligible", "rejected", "approved"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
