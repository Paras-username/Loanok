import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import loanRoute from "./routes/loanroutes.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

// API Routes
app.use("/api/rout", loanRoute);
app.get("/getting", (req, res) => {
  res.json("Hello from backend part3");
});

// Start Server (Use Dynamic Port)
const PORT = process.env.PORT || 8800;
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Export app for Vercel
export default app;
