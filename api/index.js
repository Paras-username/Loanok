import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import loanRoute from "./routes/loanroutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ 
    origin: ["https://loanokfirm.vercel.app"], // Add more origins if needed
    methods: "GET,POST,PUT,DELETE",
    credentials: true 
}));

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
connect();

// Routes
app.use("/api/rout", loanRoute);

app.get("/getting", (req, res) => {
  res.json("Hello from backend!");
});

// 🚀 Export app for Vercel (no app.listen)
export default app;
