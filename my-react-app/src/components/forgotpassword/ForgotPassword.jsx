import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);  // <-- new loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);  // <-- start loading
    try {
      const res = await axios.post("https://backendloanok.vercel.app/api/auth/forgot-password", { email });
      setMessage(res.data);
    } catch (err) {
      setMessage(err.response?.data || "Something went wrong!");
    }
    setLoading(false); // <-- stop loading after response/error
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
          disabled={loading}  // <-- disable input while loading
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded disabled:bg-blue-300"
          disabled={loading} // <-- disable button while loading
        >
          {loading ? "Sending..." : "Send Reset Link"}  {/* <-- dynamic text */}
        </button>
      </form>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
