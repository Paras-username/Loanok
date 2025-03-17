// import { useEffect, useState } from "react";
// import axios from "axios";

// const AdminPanel = () => {
//   const [loans, setLoans] = useState([]);
//   const [updatedStatus, setUpdatedStatus] = useState({});

//   useEffect(() => {
//     axios.get("http://localhost:8800/api/rout/admin/loans")
//       .then((res) => setLoans(res.data))
//       .catch((err) => console.error("Error fetching loans:", err));
//   }, []);

//   const handleStatusChange = (applicationNo, newStatus) => {
//     setUpdatedStatus((prev) => ({
//       ...prev,
//       [applicationNo]: newStatus
//     }));
//   };

//   const updateLoanStatus = async (applicationNo) => {
//     if (!updatedStatus[applicationNo]) return;

//     try {
//       await axios.put(`http://localhost:8800/api/rout/update/application/${applicationNo}`, {
//         status: updatedStatus[applicationNo]
//       });
//       alert("Loan status updated!");
//       const res = await axios.get("http://localhost:8800/api/rout/admin/loans");
//       setLoans(res.data);
//     } catch (error) {
//       console.error("Error updating loan status:", error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-8 min-h-screen bg-gray-50">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Admin Loan Panel</h2>
//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
//           <thead>
//             <tr className="bg-blue-500 text-white text-sm uppercase">
//               <th className="py-4 px-6 text-left">Application No</th>
//               <th className="py-4 px-6 text-left">Name</th>
//               <th className="py-4 px-6 text-left">Email</th>
//               <th className="py-4 px-6 text-left">Mobile</th>
//               <th className="py-4 px-6 text-left">City</th>
//               <th className="py-4 px-6 text-left">State</th>
//               <th className="py-4 px-6 text-left">Amount</th>
//               <th className="py-4 px-6 text-left">Status</th>
//               <th className="py-4 px-6 text-left">Update</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {loans.map((loan) => (
//               <tr key={loan.applicationNo} className="border-b border-gray-200 hover:bg-gray-100 transition">
//                 <td className="py-4 px-6 font-medium">{loan.applicationNo}</td>
//                 <td className="py-4 px-6">{loan.firstName} {loan.lastName}</td>
//                 <td className="py-4 px-6">{loan.email}</td>
//                 <td className="py-4 px-6">{loan.mobile}</td>
//                 <td className="py-4 px-6">{loan.city}</td>
//                 <td className="py-4 px-6">{loan.state}</td>
//                 <td className="py-4 px-6 font-semibold"> ₹{loan.amount}</td>
//                 <td className="py-4 px-6">
//                   <select
//                     className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300"
//                     value={updatedStatus[loan.applicationNo] || loan.status}
//                     onChange={(e) => handleStatusChange(loan.applicationNo, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Under Review">Under Review</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Disbursed">Disbursed</option>
//                   </select>
//                 </td>
//                 <td className="py-4 px-6">
//                   <button
//                     onClick={() => updateLoanStatus(loan.applicationNo)}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//                   >
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;


import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const [loans, setLoans] = useState([]);
  const [updatedStatus, setUpdatedStatus] = useState({});
  
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();

  // Define admin emails (modify as needed)
  const adminEmails = ["poriaparas2@gmail.com"];
  const isAdmin = user?.email && adminEmails.includes(user.email);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        if (!isAuthenticated || !isAdmin) return; // Prevent fetching if unauthorized

        const token = await getAccessTokenSilently(); // Get Auth0 access token
        const res = await axios.get("http://localhost:8800/api/rout/admin/loans", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setLoans(res.data);
      } catch (error) {
        console.error("Error fetching loans:", error);
      }
    };

    fetchLoans();
  }, [isAuthenticated, isAdmin, getAccessTokenSilently]);

  const handleStatusChange = (applicationNo, newStatus) => {
    setUpdatedStatus((prev) => ({
      ...prev,
      [applicationNo]: newStatus,
    }));
  };

  const updateLoanStatus = async (applicationNo) => {
    if (!updatedStatus[applicationNo]) return;

    try {
      const token = await getAccessTokenSilently(); // Get Auth0 token
      await axios.put(
        `http://localhost:8800/api/rout/update/application/${applicationNo}`,
        { status: updatedStatus[applicationNo] },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Loan status updated!");

      // Refresh list after update
      const res = await axios.get("http://localhost:8800/api/rout/admin/loans", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoans(res.data);
    } catch (error) {
      console.error("Error updating loan status:", error);
    }
  };

  if (isLoading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-7xl mx-auto p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Admin Loan Panel</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white text-sm uppercase">
              <th className="py-4 px-6 text-left">Application No</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Mobile</th>
              <th className="py-4 px-6 text-left">City</th>
              <th className="py-4 px-6 text-left">State</th>
              {/* <th className="py-4 px-6 text-left">Amount</th> */}
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Update</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {loans.map((loan) => (
              <tr key={loan.applicationNo} className="border-b border-gray-200 hover:bg-gray-100 transition">
                <td className="py-4 px-6 font-medium">{loan.applicationNo}</td>
                <td className="py-4 px-6">{loan.firstName} {loan.lastName}</td>
                <td className="py-4 px-6">{loan.email}</td>
                <td className="py-4 px-6">{loan.mobile}</td>
                <td className="py-4 px-6">{loan.city}</td>
                <td className="py-4 px-6">{loan.state}</td>
                {/* <td className="py-4 px-6 font-semibold"> ₹{loan.amount}</td> */}
                <td className="py-4 px-6">
                  <select
                    className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-300"
                    value={updatedStatus[loan.applicationNo] || loan.status}
                    onChange={(e) => handleStatusChange(loan.applicationNo, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Approved">Approved</option>
                    
                    <option value="Disbursed">Disbursed</option>
                  </select>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => updateLoanStatus(loan.applicationNo)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
