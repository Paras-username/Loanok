// src/components/AdminReviews.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Adminreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/reviews/admin");
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Approve review
  const approveReview = async (id) => {
    try {
      await axios.patch(`http://localhost:8800/api/reviews/${id}/approve`);
      fetchReviews(); // refresh list
    } catch (err) {
      console.error("Error approving review:", err);
    }
  };

  // Delete review
  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/reviews/${id}`);
      fetchReviews(); // refresh list
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading reviews...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin Panel – Reviews</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, idx) => (
              <motion.tr
                key={review._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{review.name}</td>
                <td className="p-3">
                  {"⭐".repeat(review.rating)}{" "}
                  <span className="text-gray-500">({review.rating})</span>
                </td>
                <td className="p-3">{review.message}</td>
                <td className="p-3">
                  {review.approved ? (
                    <span className="px-2 py-1 text-sm rounded bg-green-100 text-green-700">
                      Approved
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-sm rounded bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  )}
                </td>
                <td className="p-3 space-x-2">
                  {!review.approved && (
                    <button
                      onClick={() => approveReview(review._id)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => deleteReview(review._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminreviews;
