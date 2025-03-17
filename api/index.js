// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import loanRoute from "./routes/loanroutes.js";

// const app = express();
// dotenv.config();

// // Middleware to parse JSON
// app.use(express.json());
// app.use(cors());

// const connect = async () => {
//   try{
//     await mongoose.connect(process.env.MONGO);
//     console.log("connected to mongodb");
//   }
//   catch(error){
//     throw error;
//   }
// };

// app.use("/api/rout", loanRoute);

// app.get("/getting", (req,res) =>{
//   res.json("hello from backend");

// });

// app.listen(8800, ()=>{
//   connect()
//   console.log("connected to backend");
// })



import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import loanRoute from "./routes/loanroutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: ["https://loanokfirm.vercel.app"], credentials: true }));

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
connect();

// Routes
app.use("/api/rout", loanRoute);

app.get("/getting", (req, res) => {
  res.json("Hello from backend!");
});

// 🚀 Instead of app.listen(), export app for Vercel
export default app;
