import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";   // ✅ import here
import loanRoute from "./routes/loanroutes.js";
import carrerroutes from "./routes/carrerroutes.js";
import cibilRoute from "./routes/cibil.js";
import auth from "./routes/auth.js";
import reviewRoute from "./routes/review.js";
import leadRoutes from "./routes/leadRoutes.js";
import bankRoute from "./routes/bankRoute.js";
import eligibilityRoute from "./routes/eligibilityRoute.js";
import documentRoute from "./routes/documentRoute.js"; 


const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());   // ✅ use it here

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
app.use("/api/carrer", carrerroutes);
app.use("/api/cibil", cibilRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/leads", leadRoutes);
app.use("/api/banks", bankRoute);
app.use("/api/eligibility", eligibilityRoute);
app.use("/api/documents", documentRoute);

app.use("/api/auth", auth);

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
