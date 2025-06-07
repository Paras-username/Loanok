// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import loanRoute from "./routes/loanroutes.js";
// import authRoute from "./routes/auth.js"; // ✅ Import auth route

// const app = express();
// dotenv.config();

// // Middleware
// app.use(express.json());
// app.use(cookieParser()); // ✅ Needed for handling JWT tokens in cookies
// app.use(cors());

// //this line is extra added while auth testing


// // MongoDB Connection
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB Connection Error:", error);
//   }
// };

// // API Routes
// app.use("/api/rout", loanRoute);
// app.use("/api/auth", authRoute); // ✅ Add auth route

// app.get("/getting", (req, res) => {
//   res.json("Hello from backend part3");
// });

// // Start Server (Use Dynamic Port)
// const PORT = process.env.PORT || 8800;
// connect().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

// // Export app for Vercel
// export default app;

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import loanRoute from "./routes/loanroutes.js";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:5173", "https://www.loanok.in"], // ✅ Update with your actual domain
  credentials: true
}));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

app.use("/api/rout", loanRoute);
app.use("/api/auth", authRoute);


// Error handling middleware (add here)
app.use((err, req, res, next) => {
  console.error(err.stack); // Logs full error stack in your server logs
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.get("/getting", (req, res) => {
  res.json("Hello from backend part3");
});

const PORT = process.env.PORT || 8800;
connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export default app;
