import { useEffect, useState } from "react";
import axios from "axios";

const CibilAdmin = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/cibil/fetch");
        setRequests(res.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Panel – CIBIL / Fetch Data</h2>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">DOB</th>
            <th className="p-2 border">PAN</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id} className="text-center">
              <td className="p-2 border">{req.name}</td>
              <td className="p-2 border">
                {req.dob ? new Date(req.dob).toLocaleDateString() : "N/A"}
              </td>
              <td className="p-2 border">{req.pan}</td>
              <td className="p-2 border">{req.phone}</td>
              <td className="p-2 border">{req.email}</td>
              <td className="p-2 border">
                {req.createdAt ? new Date(req.createdAt).toLocaleString() : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CibilAdmin;
