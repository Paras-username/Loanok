// import { useState } from "react";
// import axios from "axios";

// const LeadForm = () => {
//   const [step, setStep] = useState(1);

//   const [leadData, setLeadData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     age: "",
//     city: "",
//     loanType: "",
//     loanAmount: "",
//     employmentType: "",
//     salariedDetails: {
//       companyName: "",
//       monthlySalary: "",
//       employerType: "",
//       salaryCreditMethod: "",
//     },
//     selfEmployedDetails: {
//       businessName: "",
//       businessVintage: "",
//       annualTurnover: "",
//     },
//   });

//   const handleChange = (e, section) => {
//     const { name, value } = e.target;
//     if (section) {
//       setLeadData({
//         ...leadData,
//         [section]: { ...leadData[section], [name]: value },
//       });
//     } else {
//       setLeadData({ ...leadData, [name]: value });
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.post("http://localhost:8800/api/leads", leadData);
//       if (res.data.success) {
//         alert("Lead submitted successfully!");
//         setStep(1); // Reset form after submission
//         setLeadData({
//           fullName: "",
//           email: "",
//           phone: "",
//           age: "",
//           city: "",
//           loanType: "",
//           loanAmount: "",
//           employmentType: "",
//           salariedDetails: {
//             companyName: "",
//             monthlySalary: "",
//             employerType: "",
//             salaryCreditMethod: "",
//           },
//           selfEmployedDetails: {
//             businessName: "",
//             businessVintage: "",
//             annualTurnover: "",
//           },
//         });
//       }
//     } catch (err) {
//       alert("Error submitting lead: " + err.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

//         {/* Step 1: Loan Type */}
//         {/* Step 1: Loan Type */}
// {step === 1 && (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-center">Select Loan Type</h2>
//     <p className="text-center text-gray-600">Choose the purpose of your loan</p>

//     <div className="flex flex-wrap justify-center gap-6">
//       {[
//         { type: "Personal", icon: "💳" },
//         { type: "Home", icon: "🏠" },
//         { type: "Business", icon: "📈" },
//         { type: "LAP", icon: "📜" },
//       ].map(({ type, icon }) => (
//         <div
//           key={type}
//           onClick={() => {
//             setLeadData({ ...leadData, loanType: type.toLowerCase() });
//             setStep(2);
//           }}
//           className={`cursor-pointer w-32 h-32 flex flex-col items-center justify-center rounded-xl border shadow-md transition hover:shadow-lg ${
//             leadData.loanType === type.toLowerCase()
//               ? "bg-blue-500 text-white border-blue-500"
//               : "bg-white text-gray-800"
//           }`}
//         >
//           <span className="text-3xl">{icon}</span>
//           <p className="mt-2 font-medium">{type}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

//         {/* Step 2: Employment Type */}
// {step === 2 && (
//   <div className="space-y-6">
//     <h2 className="text-2xl font-bold text-center">Select Employment Type</h2>

//     <div className="flex flex-wrap justify-center gap-6">
//       {[
//         { type: "Salaried", icon: "👔" },
//         { type: "Self-Employed", icon: "🏢" },
//       ].map(({ type, icon }) => (
//         <div
//           key={type}
//           onClick={() => {
//             setLeadData({ ...leadData, employmentType: type.toLowerCase() });
//             setStep(3);
//           }}
//           className={`cursor-pointer w-40 h-40 flex flex-col items-center justify-center rounded-xl border shadow-md transition hover:shadow-lg ${
//             leadData.employmentType === type.toLowerCase()
//               ? "bg-blue-500 text-white border-blue-500"
//               : "bg-white text-gray-800"
//           }`}
//         >
//           <span className="text-4xl">{icon}</span>
//           <p className="mt-2 font-medium">{type}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )}

//         {/* Step 3: Fill Details */}
//         {step === 3 && (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-center">Fill Details</h2>

//             {/* Common fields */}
//             {["fullName", "email", "phone", "age", "city", "loanAmount"].map((field) => (
//               <input
//                 key={field}
//                 type={["age", "loanAmount"].includes(field) ? "number" : "text"}
//                 name={field}
//                 placeholder={field.replace(/([A-Z])/g, " $1")}
//                 value={leadData[field]}
//                 onChange={handleChange}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             ))}

//             {/* Conditional fields */}
//             {leadData.employmentType === "salaried" && (
//               <>
//                 <h3 className="font-semibold">Salaried Details</h3>
//                 {["companyName", "monthlySalary", "employerType", "salaryCreditMethod"].map((field) => (
//                   <input
//                     key={field}
//                     name={field}
//                     placeholder={field.replace(/([A-Z])/g, " $1")}
//                     type={field === "monthlySalary" ? "number" : "text"}
//                     value={leadData.salariedDetails[field]}
//                     onChange={(e) => handleChange(e, "salariedDetails")}
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 ))}
//               </>
//             )}

//             {leadData.employmentType === "self-employed" && (
//               <>
//                 <h3 className="font-semibold">Self-Employed Details</h3>
//                 {["businessName", "businessVintage", "annualTurnover"].map((field) => (
//                   <input
//                     key={field}
//                     name={field}
//                     placeholder={field.replace(/([A-Z])/g, " $1")}
//                     type={["businessVintage", "annualTurnover"].includes(field) ? "number" : "text"}
//                     value={leadData.selfEmployedDetails[field]}
//                     onChange={(e) => handleChange(e, "selfEmployedDetails")}
//                     className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 ))}
//               </>
//             )}

//             <button
//               onClick={handleSubmit}
//               className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
//             >
//               Submit
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LeadForm;
import { useState, useEffect } from "react";
import axios from "axios";
import DocumentUploadForm from "../DocumentUploadForm/DocumentUploadForm";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");
  const [eligibleBanks, setEligibleBanks] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const [leadData, setLeadData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    loanType: "",
    loanAmount: "",
    employmentType: "",
    salariedDetails: {
      companyName: "",
      monthlySalary: "",
      employerType: "",
      salaryCreditMethod: "",
    },
    selfEmployedDetails: {
      businessName: "",
      businessVintage: "",
      annualTurnover: "",
    },
  });

  // Animation for step transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection("forward");
    }, 300);
    return () => clearTimeout(timer);
  }, [step]);

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section) {
      setLeadData({
        ...leadData,
        [section]: { ...leadData[section], [name]: value },
      });
    } else {
      setLeadData({ ...leadData, [name]: value });
    }
  };

  const goToStep = (newStep) => {
    setDirection(newStep > step ? "forward" : "backward");
    setStep(newStep);
  };

const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    // 1️⃣ Submit lead data to backend
    const res = await axios.post("http://localhost:8800/api/leads", leadData);

    if (res.data.success) {
      // 2️⃣ Save backend _id into local state
      setLeadData((prev) => ({ ...prev, _id: res.data.lead._id }));

      // 3️⃣ Call eligibility API immediately with fresh _id
      const eligibilityRes = await axios.post(
        "http://localhost:8800/api/eligibility",
        {
          ...leadData,
          _id: res.data.lead._id // force fresh id from backend
        }
      );

      // 4️⃣ Set eligible banks and move to Step 4
      setEligibleBanks(eligibilityRes.data.banks || []);
      goToStep(4);
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting lead: " + err.message);
  } finally {
    setIsSubmitting(false);
  }
};

  const resetForm = () => {
    setLeadData({
      fullName: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      loanType: "",
      loanAmount: "",
      employmentType: "",
      salariedDetails: {
        companyName: "",
        monthlySalary: "",
        employerType: "",
        salaryCreditMethod: "",
      },
      selfEmployedDetails: {
        businessName: "",
        businessVintage: "",
        annualTurnover: "",
      },
    });
    setEligibleBanks([]);
     setSelectedBank(null);   // ✅ clear selected bank
    goToStep(1);
  };

  // Loan type options with icons and descriptions
  const loanTypes = [
    {
      type: "Personal",
      icon: "💳",
      description: "For personal expenses, travel, or emergencies",
      color: "from-blue-500 to-blue-700",
    },
    {
      type: "Home",
      icon: "🏠",
      description: "Buy, build, or renovate your dream home",
      color: "from-green-500 to-green-700",
    },
    {
      type: "Business",
      icon: "📈",
      description: "Expand operations or manage cash flow",
      color: "from-purple-500 to-purple-700",
    },
    {
      type: "LAP",
      icon: "📜",
      description: "Loan against property for any need",
      color: "from-orange-500 to-orange-700",
    },
  ];

  // Employment type options
  const employmentTypes = [
    {
      type: "Salaried",
      icon: "👔",
      description: "Regular monthly income from employer",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      type: "Self-Employed",
      icon: "🏢",
      description: "Business owner or professional",
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-in-out"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        <div className="p-8">
          {/* Step 1: Loan Type */}
          {step === 1 && (
            <div
              className={`space-y-8 ${
                direction === "forward" ? "animate-fadeIn" : "animate-fadeOut"
              }`}
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                  What type of loan do you need?
                </h2>
                <p className="text-gray-600 mt-2">
                  Select the option that best fits your requirements
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loanTypes.map(({ type, icon, description, color }) => (
                  <div
                    key={type}
                    onClick={() => {
                      setLeadData({
                        ...leadData,
                        loanType: type.toLowerCase(),
                      });
                      goToStep(2);
                    }}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center text-center ${
                      leadData.loanType === type.toLowerCase()
                        ? `border-blue-500 bg-gradient-to-b ${color} text-white shadow-lg scale-105`
                        : "border-gray-200 bg-white text-gray-800 hover:border-blue-300"
                    }`}
                  >
                    <span className="text-5xl mb-4">{icon}</span>
                    <h3 className="text-xl font-semibold mb-2">{type} Loan</h3>
                    <p className="text-sm opacity-80">{description}</p>
                    <div className="mt-4 flex items-center text-blue-500 font-medium">
                      <span>Select</span>
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === step ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Employment Type */}
          {step === 2 && (
            <div
              className={`space-y-8 ${
                direction === "forward" ? "animate-fadeIn" : "animate-fadeOut"
              }`}
            >
              <div className="text-center">
                <button
                  onClick={() => goToStep(1)}
                  className="flex items-center text-blue-500 font-medium mb-4 mx-auto"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Back
                </button>
                <h2 className="text-3xl font-bold text-gray-800">
                  What is your employment type?
                </h2>
                <p className="text-gray-600 mt-2">
                  This helps us find the best loan options for you
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {employmentTypes.map(({ type, icon, description, color }) => (
                  <div
                    key={type}
                    onClick={() => {
                      setLeadData({
                        ...leadData,
                        employmentType: type.toLowerCase(),
                      });
                      goToStep(3);
                    }}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex flex-col items-center text-center ${
                      leadData.employmentType === type.toLowerCase()
                        ? `border-blue-500 bg-gradient-to-b ${color} text-white shadow-lg scale-105`
                        : "border-gray-200 bg-white text-gray-800 hover:border-blue-300"
                    }`}
                  >
                    <span className="text-5xl mb-4">{icon}</span>
                    <h3 className="text-xl font-semibold mb-2">{type}</h3>
                    <p className="text-sm opacity-80">{description}</p>
                    <div className="mt-4 flex items-center text-blue-500 font-medium">
                      <span>Select</span>
                      <svg
                        className="w-5 h-5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === step ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Fill Details */}
          {step === 3 && (
            <div
              className={`max-w-2xl mx-auto ${
                direction === "forward" ? "animate-fadeIn" : "animate-fadeOut"
              }`}
            >
              <div className="text-center mb-8">
                <button
                  onClick={() => goToStep(2)}
                  className="flex items-center text-blue-500 font-medium mb-4 mx-auto"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  Back
                </button>
                <h2 className="text-3xl font-bold text-gray-800">
                  Tell us about yourself
                </h2>
                <p className="text-gray-600 mt-2">
                  {"We'll"} use this information to find your best loan options
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Basic Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["fullName", "email", "phone", "age", "city"].map(
                    (field) => (
                      <div key={field} className="mb-4">
                        <label className="block text-gray-700 mb-2 capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                          type={
                            field === "age"
                              ? "number"
                              : field === "email"
                              ? "email"
                              : "text"
                          }
                          name={field}
                          placeholder={`Enter your ${field
                            .replace(/([A-Z])/g, " $1")
                            .toLowerCase()}`}
                          value={leadData[field]}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                      </div>
                    )
                  )}

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Loan Amount (₹)
                    </label>
                    <input
                      type="number"
                      name="loanAmount"
                      placeholder="Enter desired loan amount"
                      value={leadData.loanAmount}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                  </div>
                </div>
              </div>

              {/* Employment Details */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  Employment Details
                </h3>

                {/* Salaried Details */}
                {leadData.employmentType === "salaried" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "companyName",
                      "monthlySalary",
                      "employerType",
                      "salaryCreditMethod",
                    ].map((field) => (
                      <div key={field} className="mb-4">
                        <label className="block text-gray-700 mb-2 capitalize">
                          {field.replace(/([A-Z])/g, " $1")}
                        </label>
                        <input
                          name={field}
                          placeholder={`Enter your ${field
                            .replace(/([A-Z])/g, " $1")
                            .toLowerCase()}`}
                          type={field === "monthlySalary" ? "number" : "text"}
                          value={leadData.salariedDetails[field]}
                          onChange={(e) => handleChange(e, "salariedDetails")}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Self-Employed Details */}
                {leadData.employmentType === "self-employed" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["businessName", "businessVintage", "annualTurnover"].map(
                      (field) => (
                        <div key={field} className="mb-4">
                          <label className="block text-gray-700 mb-2 capitalize">
                            {field.replace(/([A-Z])/g, " $1")}
                          </label>
                          <input
                            name={field}
                            placeholder={`Enter your ${field
                              .replace(/([A-Z])/g, " $1")
                              .toLowerCase()}`}
                            type={
                              ["businessVintage", "annualTurnover"].includes(
                                field
                              )
                                ? "number"
                                : "text"
                            }
                            value={leadData.selfEmployedDetails[field]}
                            onChange={(e) =>
                              handleChange(e, "selfEmployedDetails")
                            }
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                          />
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Check Eligibility"
                )}
              </button>

              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === step ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Eligible Banks */}
          {/* Step 4: Eligible Banks */}
{/* Step 4: Eligible Banks */}
{step === 4 && (
  <div
    className={`space-y-8 ${
      direction === "forward" ? "animate-fadeIn" : "animate-fadeOut"
    }`}
  >
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800">Congratulations!</h2>
      <p className="text-gray-600 mt-2">
        We found these best loan options for you
      </p>
    </div>

    {eligibleBanks.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eligibleBanks.map((bank) => (
          <div
            key={bank._id}
            className="p-6 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white"
          >
            <div className="flex items-center mb-4">
              {bank.logoUrl && (
                <img
                  src={bank.logoUrl}
                  alt={bank.bankName}
                  className="h-10 mr-4"
                />
              )}
              <h3 className="text-xl font-bold text-gray-800">{bank.bankName}</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="text-xl font-bold text-blue-600">{bank.interestRate}%</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Processing Fee</p>
                <p className="text-xl font-bold text-blue-600">₹{bank.processingFee}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Min Tenure</p>
                <p className="text-xl font-bold text-blue-600">{bank.tenureRange.min} months</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Max Tenure</p>
                <p className="text-xl font-bold text-blue-600">{bank.tenureRange.max} months</p>
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedBank(bank); // save selected bank
                goToStep(5); // move to Step 5
              }}
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-800 transition shadow-md hover:shadow-lg flex items-center justify-center"
            >
              Apply Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    ) : (
      <div className="text-center py-12 bg-gray-50 rounded-xl">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          No eligible banks found
        </h3>
        <p className="text-gray-600">
          Try adjusting your loan requirements or amount
        </p>
      </div>
    )}
  </div>
)}

{/* Step 5: Document Upload */}
{step === 5 && (
  <div
    className={`space-y-8 ${
      direction === "forward" ? "animate-fadeIn" : "animate-fadeOut"
    }`}
  >
    <div className="text-center mb-6">
      <button
        onClick={() => goToStep(4)}
        className="flex items-center text-blue-500 font-medium mb-4 mx-auto"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back
      </button>
      <h2 className="text-3xl font-bold text-gray-800">Upload Required Documents</h2>
      <p className="text-gray-600 mt-2">
        Please upload the documents to proceed with your loan application
      </p>
    </div>

    <DocumentUploadForm
      leadId={leadData?._id}
      bankId={selectedBank?._id}
    />

    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => goToStep(3)}
        className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
      >
        Edit Details
      </button>
      <button
        onClick={resetForm}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition shadow-md hover:shadow-lg"
      >
        Apply Again
      </button>
    </div>
  </div>
)}


      {/* Add CSS animations */}
      <style>
  {`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(-20px); }
    }
    .animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
    .animate-fadeOut { animation: fadeOut 0.5s ease forwards; }
  `}
</style>

    </div>
    </div>
    </div>
  );
};

export default LeadForm;
