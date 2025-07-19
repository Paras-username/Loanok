// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Navigate } from "react-router-dom";

// const CareerAdminPanel = () => {
//   const [careerData, setCareerData] = useState([]);
//   const { isAuthenticated, isLoading, user } = useAuth0();

//   const adminEmails = ["poriaparas2@gmail.com"];
//   const isAdmin = user?.email && adminEmails.includes(user.email);

//   useEffect(() => {
//     const fetchCareer = async () => {
//       try {
//         const res = await axios.get("http://localhost:8800/api/carrer");
//         setCareerData(res.data);
//       } catch (error) {
//         console.error("Error fetching career data:", error);
//       }
//     };

//     if (isAuthenticated && isAdmin) {
//       fetchCareer();
//     }
//   }, [isAuthenticated, isAdmin]);

//   if (isLoading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
//   if (!isAuthenticated || !isAdmin) return <Navigate to="/" />;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Career Applications</h2>
//       <div className="overflow-x-auto shadow rounded-lg">
//         <table className="w-full bg-white border">
//           <thead>
//             <tr className="bg-blue-600 text-white text-sm uppercase">
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Email</th>
//               <th className="py-3 px-4 text-left">Mobile</th>
//               <th className="py-3 px-4 text-left">State</th>
//               <th className="py-3 px-4 text-left">Qualification</th>
//               <th className="py-3 px-4 text-left">Resume</th>
//             </tr>
//           </thead>
//           <tbody className="text-gray-700 text-sm">
//             {careerData.map((app) => (
//               <tr key={app._id} className="border-b hover:bg-gray-50">
//                 <td className="py-3 px-4">{app.firstname} {app.lastname}</td>
//                 <td className="py-3 px-4">{app.email}</td>
//                 <td className="py-3 px-4">{app.mobile}</td>
//                 <td className="py-3 px-4">{app.state}</td>
//                 <td className="py-3 px-4">{app.qualification}</td>
//                 <td className="py-3 px-4">
//                   {app.resumeUrl ? (
//                     <a
//                       href={app.resumeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       download
//                       className="text-blue-600 underline"
//                     >
//                       Download
//                     </a>
//                   ) : (
//                     "No Resume"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CareerAdminPanel;

import { useEffect, useState } from "react";
import axios from "axios";

const CareerAdminPanel = () => {
  const [careerData, setCareerData] = useState([]);

  // Fetch data
  const fetchCareer = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/carrer");
      setCareerData(res.data);
    } catch (error) {
      console.error("Error fetching career data:", error);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this entry?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8800/api/carrer/${id}`);
      setCareerData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting career entry:", error);
      alert("Failed to delete entry");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Career Applications</h2>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full bg-white border">
          <thead>
            <tr className="bg-blue-600 text-white text-sm uppercase">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Mobile</th>
              <th className="py-3 px-4 text-left">State</th>
              <th className="py-3 px-4 text-left">Qualification</th>
              <th className="py-3 px-4 text-left">Job</th>
              <th className="py-3 px-4 text-left">Resume</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {careerData.map((app) => (
              <tr key={app._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{app.firstname} {app.lastname}</td>
                <td className="py-3 px-4">{app.email}</td>
                <td className="py-3 px-4">{app.mobile}</td>
                <td className="py-3 px-4">{app.state}</td>
                <td className="py-3 px-4">{app.qualification}</td>
                <td className="py-3 px-4">{app.job}</td>
                <td className="py-3 px-4">
                  {app.resumeUrl ? (
                    <a
                      href={app.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Resume
                    </a>
                  ) : (
                    "No Resume"
                  )}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                  >
                    Delete
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

export default CareerAdminPanel;


