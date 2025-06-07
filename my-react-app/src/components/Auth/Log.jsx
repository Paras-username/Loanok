import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Log = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await axios.post(
        "https://backendloanok.vercel.app/api/auth/login",
        credentials,
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      setLoading(false);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] grid grid-cols-1 md:grid-cols-2">
  {/* Left side image */}
  <div className="hidden md:block">
    <img
      src="Auth.png"
      alt="Login Illustration"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Right side form */}
  <div className="flex items-center justify-center px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login to Your Account
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleLogin}>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Forgot Password Link */}
        <p className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-600 text-center text-sm mt-2">{error}</p>
        )}
      </form>

      <p className="mt-6 text-center text-gray-600 text-sm">
        {"Don't"} have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:underline font-medium"
        >
          Register here
        </Link>
      </p>
    </div>
  </div>
</div>

  );
};

export default Log;
