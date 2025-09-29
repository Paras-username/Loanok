// src/components/CibilPage.jsx
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is a CIBIL score?",
    answer:
      "CIBIL score is a 3-digit number (300–900) that represents your creditworthiness. Higher scores mean better chances of loan approvals."
  },
  {
    question: "What if my CIBIL score is less than 650?",
    answer:
      "If your score is below 650, banks may reject your loan application or offer loans at higher interest rates."
  },
  {
    question: "Which loans can I get if my CIBIL score is above 750?",
    answer:
      "If your score is 750+, you can easily get personal loans, home loans, car loans, and credit cards with low interest rates."
  },
  {
    question: "Does checking my CIBIL score reduce it?",
    answer:
      "No. Soft inquiries like checking your score on our site do not reduce your CIBIL score."
  },
  {
    question: "How can I improve my CIBIL score?",
    answer:
      "Pay EMIs and credit card bills on time, reduce credit utilization, avoid multiple loan applications, and maintain a healthy credit mix."
  }
];

const CibilForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    pan: "",
    phone: "",
    email: ""
  });
  const [message, setMessage] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/cibil/check", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error submitting details. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Check Your CIBIL Score Instantly
        </motion.h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-100">
          Know your creditworthiness before applying for a loan. A good score means higher chances of approval and better loan offers.
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-xl mx-auto mt-10 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-200">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-800">
          Enter Your Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="pan"
            placeholder="PAN Number"
            value={formData.pan}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90 text-white p-3 rounded-lg font-semibold transition"
          >
            Check My Score
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mt-16 p-8 bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 cursor-pointer bg-gradient-to-r from-gray-50 to-blue-50 hover:shadow-md transition"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-blue-900">{faq.question}</h3>
                <span className="text-xl text-blue-600">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-700"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CibilForm;
