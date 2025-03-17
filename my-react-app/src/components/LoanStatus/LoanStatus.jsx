// import { useState } from "react";
// import axios from "axios";

// const LoanStatus = () => {
//   // Change state variable to applicationNo instead of userId
//   const [applicationNo, setApplicationNo] = useState("");
//   const [loan, setLoan] = useState(null);
//   const [error, setError] = useState("");

//   // Loan process stages
//   const loanStages = ["Pending", "Under Review","Rejected", "Approved", "Disbursed"];

//   const getStatusIndex = (status) => loanStages.indexOf(status);

//   const fetchLoanStatus = async () => {
//     try {
//       setError("");
//       // Update the URL to use the applicationNo route
//       const response = await axios.get(
//         `http://localhost:8800/api/rout/application/${applicationNo}`
//       );
//       setLoan(response.data);
//     } catch (err) {
//       console.error("Error fetching loan status:", err);
//       setError("Loan not found. Please check your Application Number.");
//       setLoan(null);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4">Track Your Loan</h1>
      
//       <input
//         type="text"
//         placeholder="Enter Application Number"
//         value={applicationNo}
//         onChange={(e) => setApplicationNo(e.target.value)}
//         className="border rounded p-2 mb-2"
//       />
//       <button
//         onClick={fetchLoanStatus}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Check Status
//       </button>

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {loan && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded w-full max-w-md">
//           <p><strong>Name:</strong> {loan.firstName} {loan.lastName}</p>
//           <p><strong>Loan Amount:</strong> ₹{loan.amount}</p>
//           <p><strong>Status:</strong> {loan.status}</p>

//           {/* Progress Bar */}
//           <div className="mt-4">
//             <div className="flex justify-between text-sm font-semibold mb-2">
//               {loanStages.map((stage, index) => (
//                 <span
//                   key={index}
//                   className={getStatusIndex(loan.status) >= index ? "text-blue-600" : "text-gray-400"}
//                 >
//                   {stage}
//                 </span>
//               ))}
//             </div>
            
//             <div className="relative w-full bg-gray-300 h-2 rounded">
//               <div
//                 className="absolute top-0 left-0 h-2 bg-blue-600 rounded"
//                 style={{ width: `${(getStatusIndex(loan.status) / (loanStages.length - 1)) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanStatus;

import { useState } from "react";
import axios from "axios";

const LoanStatus = () => {
  // Change state variable to applicationNo instead of userId
  const [applicationNo, setApplicationNo] = useState("");
  const [loan, setLoan] = useState(null);
  const [error, setError] = useState("");

  // Loan process stages
  const loanStages = ["Pending", "Under Review", "Approved", "Disbursed"];

  const getStatusIndex = (status) => loanStages.indexOf(status);

  const fetchLoanStatus = async () => {
    try {
      setError("");
      // Update the URL to use the applicationNo route
      const response = await axios.get(
        `http://localhost:8800/api/rout/application/${applicationNo}`
      );
      
      setLoan(response.data);
    } catch (err) {
      console.error("Error fetching loan status:", err);
      setError("Loan not found. Please check your Application Number.");
      setLoan(null);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#f2efe4] to-[#e3dacb] min-h-screen p-4 flex flex-col items-center justify-center relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#a89b8a]/10 rounded-full blur-xl" />
  <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#908575]/10 rounded-full blur-xl" />

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-2xl">
    {/* Header Section */}
    <div className="mb-12 text-center space-y-3">
      <h1 className="text-5xl font-bold text-[#4a453e] mb-2 tracking-tight drop-shadow-sm">
        Track Your Loan
      </h1>
      <p className="text-lg text-[#6b635b] font-medium">
        Real-time updates on your application journey
      </p>
    </div>

    {/* Search Card */}
    <div className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="relative mb-6">
        <label className="block text-sm font-medium text-[#6b635b] mb-2 ml-1">
          Enter Your Application Number
        </label>
        <div className="relative">
          <input
            type="text"
            value={applicationNo}
            onChange={(e) => setApplicationNo(e.target.value)}
            className="w-full px-6 py-4 rounded-xl bg-white border-2 border-[#d4cdc0] focus:border-[#a89b8a] focus:ring-2 focus:ring-[#d4cdc0]/50 placeholder:text-[#9b958d] text-[#4a453e] text-lg transition-all pr-14"
            placeholder="E.g. APP-123456"
          />
          <div className="absolute right-4 top-4 flex gap-2">
            <div className="w-8 h-8 bg-[#f2efe4] rounded-lg flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-[#6b635b]"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={fetchLoanStatus}
        className="w-full py-4 px-6 bg-blue-700 hover:from-[#908575] hover:bg-[#4e3e2e] text-lg font-semibold text-white rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3 relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"/>
            <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd"/>
          </svg>
          Check Status
        </span>
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 transition-opacity" />
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-100/90 border border-red-200 text-red-800 rounded-lg flex items-center gap-2 animate-shake">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          <span className="font-medium">{error}</span>
        </div>
      )}
    </div>

    {/* Loan Details Card */}
    {loan && (
      <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f2efe4] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#6b635b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#6b635b]">Applicant Name</p>
                <p className="text-xl font-semibold text-[#4a453e]">{loan.firstName} {loan.lastName}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-[#f2efe4] rounded-lg flex items-center justify-center"> */}
                {/* <svg className="w-5 h-5 text-[#6b635b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
              {/* </div> */}
              {/* <div>
                <p className="text-sm text-[#6b635b]">Loan Amount</p>
                <p className="text-xl font-semibold text-[#4a453e]">₹{loan.amount}</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Enhanced Progress Timeline */}
        <div className="relative pt-8">
          <div className="absolute top-8 left-0 right-0 flex justify-between px-4">
            {loanStages.map((stage, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center w-1/4"
              >
                {/* Connection Line */}
                {index > 0 && (
                  <div className="absolute top-4 left-[-50%] right-[50%] h-0.5 bg-[#d4cdc0]">
                    <div 
  className={`absolute h-full bg-[#a89b8a] transition-all duration-500 ${getStatusIndex(loan.status) >= index ? 'w-full' : 'w-0'}`}
/>

                  </div>
                )}
                
                {/* Step Indicator */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all ${
                  getStatusIndex(loan.status) >= index 
                    ? 'bg-[#a89b8a] scale-110 shadow-md' 
                    : 'bg-white border-2 border-[#d4cdc0]'
                }`}>
                  {getStatusIndex(loan.status) >= index ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-sm text-[#6b635b]">{index + 1}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <span className={`text-center text-sm font-medium px-2 ${
                  getStatusIndex(loan.status) >= index 
                    ? 'text-[#4a453e]' 
                    : 'text-[#9b958d]'
                }`}>
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-[#f2efe4] rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-[#a89b8a] rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-[#6b635b]">
              Current Status: <span className="text-[#4a453e]">{loan.status}</span>
            </span>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

  );
};

export default LoanStatus;