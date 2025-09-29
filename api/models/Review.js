// models/Review.js
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    message: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: false
    }, // admin moderation
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Review", ReviewSchema);