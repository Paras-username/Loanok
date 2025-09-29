import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // for star icons

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 0, message: "" }); // ✅ changed "comment" -> "message"

  // Fetch approved reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/reviews?approved=true");
        // Sort by latest & keep only 5
        const latest = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setReviews(latest.slice(0, 5));
      } catch (err) {
        console.error("Error fetching reviews", err);
      }
    };
    fetchReviews();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/reviews", form);
      alert("Thanks! Your review is submitted for approval.");
      setForm({ name: "", rating: 0, message: "" }); // ✅ reset with message
    } catch (err) {
      console.error("Error submitting review", err);
    }
  };

  // Handle star rating click
  const handleStarClick = (rating) => {
    setForm({ ...form, rating });
  };

  return (
    <div className="bg-gray-50 py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white shadow-md rounded-2xl p-4"
          >
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rev.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-3 italic">"{rev.message}"</p> {/* ✅ use message */}
            <p className="font-semibold text-gray-900">{rev.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(rev.createdAt).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Review Form */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded-lg"
            required
          />
          <textarea
            placeholder="Your Comment"
            value={form.message} // ✅ fixed
            onChange={(e) => setForm({ ...form, message: e.target.value })} // ✅ fixed
            className="w-full border p-2 rounded-lg"
            required
          />
          {/* Star rating input */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                onClick={() => handleStarClick(i + 1)}
                className={`h-6 w-6 cursor-pointer ${
                  i < form.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsSection;
