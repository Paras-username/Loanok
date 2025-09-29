// models/CibilRequest.js
import mongoose from "mongoose";

const CibilRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }, // Date of Birth
    pan: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("CibilRequest", CibilRequestSchema);