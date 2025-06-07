import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("https://backendloanok.vercel.app/api/auth/register", inputs);
      setLoading(false);
      navigate("/login");
    } catch (err) {
      setLoading(false);
      setError(err.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] flex">
  {/* Left image section */}
  <div className="w-1/2 hidden md:block">
    <img
      src="Auth.png"
      alt="Registration Illustration"
      className="w-full h-full object-contain" // or 'object-cover' based on your preference
    />
  </div>

  {/* Right form section */}
  <div className="w-full md:w-1/2 flex items-center justify-center p-8">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create an Account
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={inputs.username}
          onChange={handleChange}
          className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          value={inputs.email}
          onChange={handleChange}
          className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
          className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-600 text-center text-sm mt-2">{error}</p>
        )}
      </form>

      <p className="mt-6 text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline font-medium">
          Login here
        </Link>
      </p>
    </div>
  </div>
</div>

  );
};

export default Register;
