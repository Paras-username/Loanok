// import { useState } from "react";
// import axios from "axios";
// import emailjs from "emailjs-com";

// const Dataform = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     city: "",
//     state: "",
//     country: "",
//     pincode: "",
//   });

//   const [applicationNo, setApplicationNo] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     const cleanedFormData = Object.fromEntries(
//       Object.entries(formData).map(([key, value]) => [key, value.trim()])
//     );

//     if (Object.values(cleanedFormData).some((value) => value === "")) {
//       setError("All fields are required.");
//       return;
//     }

//     try {
//       console.log("Submitting data:", cleanedFormData);
//       const response = await axios.post(
//         "http://localhost:8800/api/rout/apply",
//         cleanedFormData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       const appNo = response.data.loan.applicationNo;
//       setApplicationNo(appNo);

//       emailjs
//         .send(
//           "service_h77ge4b",
//           "template_vlbarhq",
//           {
//             applicationNo: appNo,
//             to_email: formData.email,
//           },
//           "GX_sc30t9BB3Nk3RZ"
//         )
//         .then(() => alert("Application No sent to your email"))
//         .catch((err) => console.error("Error sending email:", err));

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         city: "",
//         state: "",
//         country: "",
//         pincode: "",
//       });
//     } catch (err) {
//       setError(err.response?.data?.error || "Something went wrong");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         Loan Application Form
//       </h2>

//       {error && <p className="text-red-600 text-center mb-2">{error}</p>}
//       {applicationNo && (
//         <p className="text-green-600 text-center mb-2">
//           Your Application No: <strong>{applicationNo}</strong>
//         </p>
//       )}

//       <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="mobile"
//           placeholder="Mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="city"
//           placeholder="City"
//           value={formData.city}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="state"
//           placeholder="State"
//           value={formData.state}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="country"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           name="pincode"
//           placeholder="Pincode"
//           value={formData.pincode}
//           onChange={handleChange}
//           required
//         />

//         <button
//           className="col-span-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           type="submit"
//         >
//           Apply for Loan
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Dataform;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

const Dataform = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [applicationNo, setApplicationNo] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const cleanedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()])
    );

    if (Object.values(cleanedFormData).some((value) => value === "")) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8800/api/rout/apply",
        cleanedFormData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const appNo = response.data.loan.applicationNo;
      setApplicationNo(appNo);

      emailjs.send(
        "service_h77ge4b",
        "template_vlbarhq",
        {
          applicationNo: appNo,
          to_email: formData.email,
        },
        "GX_sc30t9BB3Nk3RZ"
      );

      alert("Application No sent to your email");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      });
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Delay to match animation
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal click
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
          onClick={handleClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Loan Application Form
        </h2>
        {error && <p className="text-red-600 text-center mb-2">{error}</p>}
        {applicationNo && (
          <p className="text-green-600 text-center mb-2">
            Your Application No: <strong>{applicationNo}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              className="w-full p-2 border rounded"
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          ))}
          <button
            className="col-span-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            type="submit"
          >
            Apply for Loan
          </button>
        </form>
      </div>
    </div>
  );
};

Dataform.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Dataform;
