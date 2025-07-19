import mongoose from "mongoose";

const CarrerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Carrer", CarrerSchema);


// import mongoose from "mongoose";

// const CarrerSchema = new mongoose.Schema(
//   {
//     firstname: {
//       type: String,
//       required: [true, "First name is required"],
//       trim: true,
//     },
//     lastname: {
//       type: String,
//       required: [true, "Last name is required"],
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       match: [/.+\@.+\..+/, "Please fill a valid email address"],
//     },
//     mobile: {
//       type: String,
//       required: [true, "Mobile number is required"],
//       trim: true,
//     },
//     state: {
//       type: String,
//       required: [true, "State is required"],
//     },
//     qualification: {
//       type: String,
//       required: [true, "Qualification is required"],
//     },
//     job: {
//       type: String,
//       required: [true, "Job role is required"],
//     },
//     resumeUrl: {
//       type: String,
//       required: [true, "Resume URL is required"],
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Carrer", CarrerSchema);
