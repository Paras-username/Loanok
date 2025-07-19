

// import { useState } from "react";
// import axios from "axios";

// const CareerForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     mobile: "",
//     state: "",
//     qualification: "",
//     job: "",         // <-- Added job field
//     resumeUrl: "",
//   });

//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState("");

//   // You can add more job roles here easily
//   const jobOptions = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Full Stack Developer",
//     "UI/UX Designer",
//     "Mobile App Developer",
//     "QA Tester",
//     "Project Manager",
//   ];

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleResumeUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setUploading(true);
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "upload_resume");

//     try {
//       const res = await fetch("https://api.cloudinary.com/v1_1/dr0jes5ir/raw/upload", {
//         method: "POST",
//         body: data,
//       });

//       const result = await res.json();
//       setFormData((prev) => ({ ...prev, resumeUrl: result.secure_url }));
//       setUploading(false);
//       setMessage("Resume uploaded successfully!");
//     } catch (err) {
//       console.error("Cloudinary upload failed:", err);
//       setUploading(false);
//       setMessage("Upload failed. Try again.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8800/api/carrer", formData);
//       setMessage("Application submitted!");

//       setFormData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         mobile: "",
//         state: "",
//         qualification: "",
//         job: "",           // <-- Clear job field too
//         resumeUrl: "",
//       });
//     } catch (err) {
//       console.error("Submission failed:", err);
//       setMessage("Submission failed. Try again.");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Career Application</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="firstname"
//           value={formData.firstname}
//           onChange={handleChange}
//           placeholder="First Name"
//           required
//           className="w-full border p-2"
//         />
//         <input
//           type="text"
//           name="lastname"
//           value={formData.lastname}
//           onChange={handleChange}
//           placeholder="Last Name"
//           required
//           className="w-full border p-2"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//           className="w-full border p-2"
//         />
//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile"
//           required
//           className="w-full border p-2"
//         />
//         <input
//           type="text"
//           name="state"
//           value={formData.state}
//           onChange={handleChange}
//           placeholder="State"
//           required
//           className="w-full border p-2"
//         />
//         <input
//           type="text"
//           name="qualification"
//           value={formData.qualification}
//           onChange={handleChange}
//           placeholder="Qualification"
//           required
//           className="w-full border p-2"
//         />

//         {/* Job Role Dropdown */}
//         <select
//           name="job"
//           value={formData.job}
//           onChange={handleChange}
//           required
//           className="w-full border p-2"
//         >
//           <option value="">Select Job Role</option>
//           {jobOptions.map((role) => (
//             <option key={role} value={role}>
//               {role}
//             </option>
//           ))}
//         </select>

//         <input
//           type="file"
//           onChange={handleResumeUpload}
//           accept=".pdf,.doc,.docx"
//           className="w-full"
//         />
//         {uploading && <p className="text-blue-500">Uploading resume...</p>}
//         {formData.resumeUrl && (
//           <p className="text-green-600 text-sm">Resume uploaded ✅</p>
//         )}

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           disabled={uploading}
//         >
//           Submit Application
//         </button>
//       </form>
//       {message && (
//         <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
//       )}
//     </div>
//   );
// };

// export default CareerForm;


// CareerForm.jsx
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    state: "",
    qualification: "",
    job: "",
    resumeUrl: "",
  });

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const jobOptions = [
    "Lead Collector Intern",
    "Software Tester Intern",
    "Web Developer Intern",
    "Graphic Designer Intern",
    "App Development Intern",
    "Google Ads Campaign Intern",
    "Marketing Intern",
    "Sales Intern",
    "Social Media Content Creator Intern",
    "Social Media Handler Intern",
    "Business Development Intern",
    "Document Verification Intern",
    "Office Operations Intern",
    "Operations Handler Intern",
    "Digital Marketing Intern",
    "Content Creation Intern",
    "Financial Accountant Intern (for ITR and financial tasks)"
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_resume");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/dr0jes5ir/raw/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      setFormData((prev) => ({ ...prev, resumeUrl: result.secure_url }));
      setUploading(false);
      setMessage("Resume uploaded successfully!");
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
      setUploading(false);
      setMessage("Upload failed. Try again.");
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("https://backendloanok.vercel.app/api/carrer", formData);
    setMessage("✅ Application submitted successfully!");

    // Clear form
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      state: "",
      qualification: "",
      job: "",
      resumeUrl: "",
    });

    // Show alert
    alert("Application submitted successfully!");

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);

  } catch (err) {
    console.error("Submission failed:", err);
    setMessage("❌ Submission failed. Try again.");
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-800 mb-3">Career Opportunities</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our dynamic team and grow your career with exciting internship opportunities
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-700 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Why Join Our Team?</h2>
              <ul className="space-y-3">
                {["Hands-on experience", "Mentorship from experts", "Flexible hours", "Certificate & LOR", "Full-time potential"].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-blue-500 rounded-full p-2 mr-3">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-3/5 p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required className="border p-3 rounded" />
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required className="border p-3 rounded" />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full border p-3 rounded" />
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className="w-full border p-3 rounded" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required className="border p-3 rounded" />
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} placeholder="Qualification" required className="border p-3 rounded" />
                </div>
                <select name="job" value={formData.job} onChange={handleChange} required className="w-full border p-3 rounded">
                  <option value="">Select Job Role</option>
                  {jobOptions.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <div onClick={() => fileInputRef.current.click()} className="border-2 border-dashed p-6 text-center rounded-lg cursor-pointer hover:border-blue-400">
                  <p>{formData.resumeUrl ? "Resume uploaded ✅" : "Click to upload resume (PDF/DOC/DOCX)"}</p>
                  <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} className="hidden" />
                </div>
                {uploading && <p className="text-blue-500">Uploading resume...</p>}
                <button type="submit" disabled={uploading} className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 rounded-lg hover:opacity-90 shadow-lg">
                  Submit Application
                </button>
                {message && <p className="text-center text-sm mt-2 text-gray-700">{message}</p>}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>We value your privacy. All information submitted is securely stored and used solely for recruitment purposes.</p>
          <p className="mt-2">© {new Date().getFullYear()} CareerConnect. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
