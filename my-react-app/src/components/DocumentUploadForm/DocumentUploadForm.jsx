// import { useState, useRef } from "react";
// import axios from "axios";
// import PropTypes from "prop-types";

// const DocumentUploadForm = ({ leadId, bankId }) => {
//   const [employmentType, setEmploymentType] = useState("");
//   const [files, setFiles] = useState({
//     pan: null,
//     idProof: null,
//     addressProof: null,
//     salarySlips: null,
//     bankStatement: null,
//     businessProof: null,
//     incomeStatement: null,
//   });

//   const [uploadedUrls, setUploadedUrls] = useState({
//     pan: "",
//     idProof: "",
//     addressProof: "",
//     salarySlips: "",
//     bankStatement: "",
//     businessProof: "",
//     incomeStatement: "",
//   });

//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState("");

//   const fileInputRefs = {
//     pan: useRef(null),
//     idProof: useRef(null),
//     addressProof: useRef(null),
//     salarySlips: useRef(null),
//     bankStatement: useRef(null),
//     businessProof: useRef(null),
//     incomeStatement: useRef(null),
//   };

//   const handleEmploymentChange = (e) => {
//     setEmploymentType(e.target.value);
//     // Reset files on type change
//     setFiles({
//       pan: null,
//       idProof: null,
//       addressProof: null,
//       salarySlips: null,
//       bankStatement: null,
//       businessProof: null,
//       incomeStatement: null,
//     });
//     setUploadedUrls({
//       pan: "",
//       idProof: "",
//       addressProof: "",
//       salarySlips: "",
//       bankStatement: "",
//       businessProof: "",
//       incomeStatement: "",
//     });
//   };

//   const handleFileUpload = async (e, key) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);

//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "upload_resume"); // replace with your preset

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/dr0jes5ir/raw/upload", {
//         method: "POST",
//         body: data,
//       });
//       const result = await res.json();
//       setFiles((prev) => ({ ...prev, [key]: file }));
//       setUploadedUrls((prev) => ({ ...prev, [key]: result.secure_url }));
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert(`Upload failed for ${key}. Try again.`);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!employmentType) return alert("Please select employment type");

//     const requiredFiles = ["pan", "idProof", "addressProof"];
//     if (employmentType === "salaried") requiredFiles.push("salarySlips", "bankStatement");
//     if (employmentType === "self-employed") requiredFiles.push("businessProof", "incomeStatement", "bankStatement");

//     for (let key of requiredFiles) {
//       if (!uploadedUrls[key]) return alert(`Please upload ${key.replace(/([A-Z])/g, " $1")}`);
//     }

//     try {
//       await axios.post("http://localhost:8800/api/documents", {
//   leadId,
//   bankId,
//   employmentType,
//   files: uploadedUrls,
// });
//       setMessage("✅ Documents uploaded successfully!");
//       setEmploymentType("");
//       setFiles({
//         pan: null,
//         idProof: null,
//         addressProof: null,
//         salarySlips: null,
//         bankStatement: null,
//         businessProof: null,
//         incomeStatement: null,
//       });
//       setUploadedUrls({
//         pan: "",
//         idProof: "",
//         addressProof: "",
//         salarySlips: "",
//         bankStatement: "",
//         businessProof: "",
//         incomeStatement: "",
//       });
//     } catch (err) {
//       console.error(err);
//       setMessage("❌ Upload failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
//         <h1 className="text-2xl font-bold mb-6">Upload Documents</h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Employment Type Dropdown */}
//           <select
//             value={employmentType}
//             onChange={handleEmploymentChange}
//             required
//             className="w-full border p-3 rounded"
//           >
//             <option value="">Select Employment Type</option>
//             <option value="salaried">Salaried</option>
//             <option value="self-employed">Self-Employed</option>
//           </select>

//           {/* Common Documents */}
//           {["pan", "idProof", "addressProof"].map((key) => (
//             <div
//               key={key}
//               onClick={() => fileInputRefs[key].current.click()}
//               className="border-2 border-dashed p-4 rounded cursor-pointer hover:border-blue-400"
//             >
//               <p>{uploadedUrls[key] ? `${key.toUpperCase()} uploaded ✅` : `Click to upload ${key.toUpperCase()}`}</p>
//               <input
//                 ref={fileInputRefs[key]}
//                 type="file"
//                 className="hidden"
//                 onChange={(e) => handleFileUpload(e, key)}
//               />
//             </div>
//           ))}

//           {/* Salaried Documents */}
//           {employmentType === "salaried" &&
//             ["salarySlips", "bankStatement"].map((key) => (
//               <div
//                 key={key}
//                 onClick={() => fileInputRefs[key].current.click()}
//                 className="border-2 border-dashed p-4 rounded cursor-pointer hover:border-blue-400"
//               >
//                 <p>{uploadedUrls[key] ? `${key} uploaded ✅` : `Click to upload ${key}`}</p>
//                 <input
//                   ref={fileInputRefs[key]}
//                   type="file"
//                   className="hidden"
//                   onChange={(e) => handleFileUpload(e, key)}
//                 />
//               </div>
//             ))}

//           {/* Self-Employed Documents */}
//           {employmentType === "self-employed" &&
//             ["businessProof", "incomeStatement", "bankStatement"].map((key) => (
//               <div
//                 key={key}
//                 onClick={() => fileInputRefs[key].current.click()}
//                 className="border-2 border-dashed p-4 rounded cursor-pointer hover:border-blue-400"
//               >
//                 <p>{uploadedUrls[key] ? `${key} uploaded ✅` : `Click to upload ${key}`}</p>
//                 <input
//                   ref={fileInputRefs[key]}
//                   type="file"
//                   className="hidden"
//                   onChange={(e) => handleFileUpload(e, key)}
//                 />
//               </div>
//             ))}

//           <button
//             type="submit"
//             disabled={uploading}
//             className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//           >
//             {uploading ? "Uploading..." : "Submit Documents"}
//           </button>

//           {message && <p className="text-green-600 mt-2">{message}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// // PropTypes validation
// DocumentUploadForm.propTypes = {
//   leadId: PropTypes.string.isRequired,
//   bankId: PropTypes.string.isRequired,
// };

// export default DocumentUploadForm;
import { useState, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const DocumentUploadForm = ({ leadId, bankId }) => {
  const [employmentType, setEmploymentType] = useState("");
  const [files, setFiles] = useState({
    pan: null,
    idProof: null,
    addressProof: null,
    salarySlips: null,
    bankStatement: null,
    businessProof: null,
    incomeStatement: null,
  });

  const [uploadedUrls, setUploadedUrls] = useState({
    pan: "",
    idProof: "",
    addressProof: "",
    salarySlips: "",
    bankStatement: "",
    businessProof: "",
    incomeStatement: "",
  });

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(""); // 'submitting', 'success', 'error'
  const [activeUploads, setActiveUploads] = useState({}); // Track active uploads

  const fileInputRefs = {
    pan: useRef(null),
    idProof: useRef(null),
    addressProof: useRef(null),
    salarySlips: useRef(null),
    bankStatement: useRef(null),
    businessProof: useRef(null),
    incomeStatement: useRef(null),
  };

  const documentLabels = {
    pan: "PAN Card",
    idProof: "ID Proof",
    addressProof: "Address Proof",
    salarySlips: "Salary Slips",
    bankStatement: "Bank Statements",
    businessProof: "Business Proof",
    incomeStatement: "Income Statement"
  };

  const handleEmploymentChange = (e) => {
    setEmploymentType(e.target.value);
    // Reset files on type change
    setFiles({
      pan: null,
      idProof: null,
      addressProof: null,
      salarySlips: null,
      bankStatement: null,
      businessProof: null,
      incomeStatement: null,
    });
    setUploadedUrls({
      pan: "",
      idProof: "",
      addressProof: "",
      salarySlips: "",
      bankStatement: "",
      businessProof: "",
      incomeStatement: "",
    });
  };

  const handleFileUpload = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setActiveUploads(prev => ({...prev, [key]: true}));

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_resume"); // replace with your preset

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dr0jes5ir/raw/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      setFiles((prev) => ({ ...prev, [key]: file }));
      setUploadedUrls((prev) => ({ ...prev, [key]: result.secure_url }));
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage(`Upload failed for ${documentLabels[key]}. Try again.`);
    } finally {
      setUploading(false);
      setActiveUploads(prev => ({...prev, [key]: false}));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employmentType) {
      setMessage("Please select employment type");
      return;
    }

    const requiredFiles = ["pan", "idProof", "addressProof"];
    if (employmentType === "salaried") requiredFiles.push("salarySlips", "bankStatement");
    if (employmentType === "self-employed") requiredFiles.push("businessProof", "incomeStatement", "bankStatement");

    for (let key of requiredFiles) {
      if (!uploadedUrls[key]) {
        setMessage(`Please upload ${documentLabels[key]}`);
        return;
      }
    }

    setSubmissionStatus("submitting");
    
    try {
      await axios.post("http://localhost:8800/api/documents", {
        leadId,
        bankId,
        employmentType,
        files: uploadedUrls,
      });
      
      setSubmissionStatus("success");
      setTimeout(() => {
        // Redirect to home page after 3 seconds
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      console.error(err);
      setSubmissionStatus("error");
      setMessage("❌ Upload failed. Try again.");
    }
  };

  const getFileName = (file) => {
    if (!file) return "";
    return file.name.length > 20 ? file.name.substring(0, 17) + "..." : file.name;
  };

  const renderFileUploadBox = (key) => (
    <div
      key={key}
      onClick={() => !uploading && fileInputRefs[key].current.click()}
      className={`relative border-2 border-dashed p-4 rounded-lg cursor-pointer transition-all duration-200 ${
        uploading ? "opacity-50 cursor-not-allowed" : "hover:border-blue-500 hover:bg-blue-50"
      } ${uploadedUrls[key] ? "border-green-500 bg-green-50" : "border-gray-300"}`}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-gray-600 text-center">
          {uploadedUrls[key] ? (
            <span className="text-green-600 font-medium">
              {getFileName(files[key]) || `${documentLabels[key]} Uploaded`} ✅
            </span>
          ) : (
            `Click to upload ${documentLabels[key]}`
          )}
        </p>
        {activeUploads[key] && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-600 h-2.5 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
      <input
        ref={fileInputRefs[key]}
        type="file"
        className="hidden"
        onChange={(e) => handleFileUpload(e, key)}
        disabled={uploading}
      />
    </div>
  );

  if (submissionStatus === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="flex justify-center">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Loan Approved!</h2>
          <p className="mt-2 text-gray-600">Congratulations! Your loan application has been approved successfully.</p>
          <p className="mt-4 text-gray-500 text-sm">Redirecting to home page in 3 seconds...</p>
          <div className="mt-6">
            <div className="bg-gray-200 w-full rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full animate-progress"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Document Upload</h1>
          <p className="text-gray-600 mt-2">Please upload the required documents for your loan application</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Employment Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
            <select
              value={employmentType}
              onChange={handleEmploymentChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Employment Type</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>

          {employmentType && (
            <>
              {/* Common Documents */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Mandatory Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["pan", "idProof", "addressProof"].map((key) => renderFileUploadBox(key))}
                </div>
              </div>

              {/* Conditional Documents */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {employmentType === "salaried" ? "Salaried Documents" : "Business Documents"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {employmentType === "salaried" ? (
                    <>
                      {renderFileUploadBox("salarySlips")}
                      {renderFileUploadBox("bankStatement")}
                    </>
                  ) : (
                    <>
                      {renderFileUploadBox("businessProof")}
                      {renderFileUploadBox("incomeStatement")}
                      {renderFileUploadBox("bankStatement")}
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={uploading || submissionStatus === "submitting"}
                className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submissionStatus === "submitting" ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Submit Documents"
                )}
              </button>
            </>
          )}

          {message && (
            <div className={`p-3 rounded-lg ${message.includes("❌") ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
              {message}
            </div>
          )}
        </form>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 3s linear forwards;
        }
      `}</style>
    </div>
  );
};

// PropTypes validation
DocumentUploadForm.propTypes = {
  leadId: PropTypes.string.isRequired,
  bankId: PropTypes.string.isRequired,
};

export default DocumentUploadForm;