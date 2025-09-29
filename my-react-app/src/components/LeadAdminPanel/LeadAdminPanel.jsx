// import { useEffect, useState } from "react";
// import axios from "axios";

// const LeadAdminPanel = () => {
//   const [leads, setLeads] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchAllLeads = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get("http://localhost:8800/api/leads");
//         const leadsData = res.data.data || [];
//         setLeads(leadsData);
//       } catch (err) {
//         console.error("Error fetching leads:", err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAllLeads();
//   }, []);

//   if (loading) return <div className="p-8 text-center">Loading...</div>;

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
//       {leads.length === 0 ? (
//         <p>No leads found</p>
//       ) : (
//         <div className="space-y-6">
//           {leads.map((lead) => (
//             <div key={lead._id} className="p-6 bg-white shadow rounded-xl border">
//               <h2 className="text-xl font-semibold mb-2">{lead.fullName}</h2>
//               <p>Email: {lead.email}</p>
//               <p>Phone: {lead.phone}</p>
//               <p>Age: {lead.age}</p>
//               <p>City: {lead.city}</p>
//               <p>Loan Type: {lead.loanType}</p>
//               <p>Loan Amount: ₹{lead.loanAmount}</p>
//               <p>Employment Type: {lead.employmentType}</p>

//               {/* Salaried / Self-Employed Details */}
//               {lead.employmentType === "salaried" && lead.salariedDetails && (
//                 <div className="mt-2">
//                   <h3 className="font-semibold">Salaried Details:</h3>
//                   <p>Company Name: {lead.salariedDetails.companyName}</p>
//                   <p>Monthly Salary: ₹{lead.salariedDetails.monthlySalary}</p>
//                   <p>Employer Type: {lead.salariedDetails.employerType}</p>
//                   <p>Salary Credit Method: {lead.salariedDetails.salaryCreditMethod}</p>
//                 </div>
//               )}
//               {lead.employmentType === "self-employed" && lead.selfEmployedDetails && (
//                 <div className="mt-2">
//                   <h3 className="font-semibold">Self-Employed Details:</h3>
//                   <p>Business Name: {lead.selfEmployedDetails.businessName}</p>
//                   <p>Business Vintage: {lead.selfEmployedDetails.businessVintage}</p>
//                   <p>Annual Turnover: {lead.selfEmployedDetails.annualTurnover}</p>
//                 </div>
//               )}

//               {/* Selected Banks */}
//               {lead.banks && lead.banks.length > 0 ? (
//                 <div className="mt-4">
//                   <h3 className="font-semibold mb-2">Eligible Banks:</h3>
//                   <ul className="list-disc pl-5">
//                     {lead.banks.map((bank) => (
//                       <li key={bank._id}>
//                         {bank.bankName} - {bank.interestRate}% - ₹{bank.processingFee} - 
//                         Max Loan: ₹{bank.maxLoanAmount} - Tenure: {bank.tenureRange.min}-
//                         {bank.tenureRange.max} months
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <p className="mt-2">No eligible banks</p>
//               )}

//               {/* Uploaded Documents */}
//               {lead.documents && lead.documents.length > 0 ? (
//                 <div className="mt-4">
//                   <h3 className="font-semibold mb-2">Documents:</h3>
//                   <ul className="list-disc pl-5">
//                     {lead.documents.map((doc) => {
//                       const docEntries = [
//                         ["PAN Card", doc.panCard],
//                         ["ID Proof", doc.idProof],
//                         ["Address Proof", doc.addressProof],
//                         ["Salary Slips", doc.salarySlips && doc.salarySlips.length > 0 ? doc.salarySlips.join(", ") : ""],
//                         ["Salaried Bank Statement", doc.salariedBankStatement],
//                         ["Business Proof", doc.businessProof],
//                         ["Income Statement", doc.incomeStatement],
//                         ["Self-Employed Bank Statement", doc.selfEmployedBankStatement],
//                       ].filter(([_, url]) => url); // filter out empty URLs

//                       if (docEntries.length === 0) return <li key={doc._id}>No documents uploaded</li>;

//                       return docEntries.map(([name, url]) => (
//                         <li key={name}>
//                           {name}:{" "}
//                           <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                             View
//                           </a>
//                         </li>
//                       ));
//                     })}
//                   </ul>
//                 </div>
//               ) : (
//                 <p className="mt-2">No documents uploaded</p>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LeadAdminPanel;

import { useEffect, useState } from "react";
import axios from "axios";

const LeadAdminPanel = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedLead, setExpandedLead] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState({}); // Track which lead is being updated

  useEffect(() => {
    const fetchAllLeads = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8800/api/leads");
        const leadsData = res.data.data || [];
        setLeads(leadsData);
      } catch (err) {
        console.error("Error fetching leads:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllLeads();
  }, []);

  const toggleExpandLead = (leadId) => {
    if (expandedLead === leadId) {
      setExpandedLead(null);
    } else {
      setExpandedLead(leadId);
    }
  };

  const updateLeadStatus = async (leadId, newStatus) => {
    setUpdatingStatus(prev => ({...prev, [leadId]: true}));
    
    try {
      const res = await axios.patch(`http://localhost:8800/api/leads/${leadId}/status`, {
        status: newStatus
      });
      
      if (res.data.success) {
        // Update the lead in state
        setLeads(prevLeads => 
          prevLeads.map(lead => 
            lead._id === leadId ? {...lead, status: newStatus} : lead
          )
        );
      }
    } catch (err) {
      console.error("Error updating lead status:", err.message);
      alert("Failed to update lead status. Please try again.");
    } finally {
      setUpdatingStatus(prev => ({...prev, [leadId]: false}));
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone?.includes(searchTerm) ||
      lead.loanType?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Management Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage and review all loan applications</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{leads.filter(lead => lead.status === 'approved').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{leads.filter(lead => lead.status === 'pending').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-red-100 p-3 mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900">{leads.filter(lead => lead.status === 'rejected').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search leads by name, email, phone..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <select
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads List */}
        {filteredLeads.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No leads found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div key={lead._id} className="bg-white shadow rounded-xl overflow-hidden">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpandLead(lead._id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                        {lead.fullName}
                        {lead.status && (
                          <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                            lead.status === 'approved' ? 'bg-green-100 text-green-800' :
                            lead.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                        )}
                      </h2>
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          {lead.email}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                          </svg>
                          {lead.phone}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                          </svg>
                          {lead.city}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-lg font-bold ${
                        lead.loanAmount > 500000 ? 'text-red-600' : 
                        lead.loanAmount > 200000 ? 'text-orange-600' : 'text-green-600'
                      }`}>
                        ₹{lead.loanAmount?.toLocaleString()}
                      </span>
                      <svg 
                        className={`w-5 h-5 ml-2 transform transition-transform ${expandedLead === lead._id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {lead.loanType}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {lead.employmentType}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      Age: {lead.age}
                    </span>
                  </div>
                </div>
                
                {/* Expandable Details */}
                {expandedLead === lead._id && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Employment Details */}
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Employment Details</h3>
                        {lead.employmentType === "salaried" && lead.salariedDetails ? (
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Company:</span> {lead.salariedDetails.companyName}</p>
                            <p><span className="font-medium">Monthly Salary:</span> ₹{lead.salariedDetails.monthlySalary?.toLocaleString()}</p>
                            <p><span className="font-medium">Employer Type:</span> {lead.salariedDetails.employerType}</p>
                            <p><span className="font-medium">Salary Method:</span> {lead.salariedDetails.salaryCreditMethod}</p>
                          </div>
                        ) : lead.employmentType === "self-employed" && lead.selfEmployedDetails ? (
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Business:</span> {lead.selfEmployedDetails.businessName}</p>
                            <p><span className="font-medium">Business Vintage:</span> {lead.selfEmployedDetails.businessVintage}</p>
                            <p><span className="font-medium">Annual Turnover:</span> ₹{lead.selfEmployedDetails.annualTurnover?.toLocaleString()}</p>
                          </div>
                        ) : (
                          <p className="text-gray-500">No employment details available</p>
                        )}
                      </div>
                      
                      {/* Bank Options */}
                      <div>
                        <h3 className="font-semibold text-gray-700 mb-3">Eligible Banks</h3>
                        {lead.banks && lead.banks.length > 0 ? (
                          <div className="space-y-3">
                            {lead.banks.map((bank) => (
                              <div key={bank._id} className="bg-white p-3 rounded-lg border">
                                <h4 className="font-medium text-blue-600">{bank.bankName}</h4>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                                  <div><span className="font-medium">Interest:</span> {bank.interestRate}%</div>
                                  <div><span className="font-medium">Fee:</span> ₹{bank.processingFee}</div>
                                  <div><span className="font-medium">Max Loan:</span> ₹{bank.maxLoanAmount?.toLocaleString()}</div>
                                  <div><span className="font-medium">Tenure:</span> {bank.tenureRange?.min}-{bank.tenureRange?.max} months</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500">No eligible banks</p>
                        )}
                      </div>
                      
                      {/* Documents */}
                      <div className="md:col-span-2">
                        <h3 className="font-semibold text-gray-700 mb-3">Documents</h3>
                        {lead.documents && lead.documents.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {lead.documents.map((doc, index) => {
                              const docEntries = [
                                ["PAN Card", doc.panCard],
                                ["ID Proof", doc.idProof],
                                ["Address Proof", doc.addressProof],
                                ["Salary Slips", doc.salarySlips],
                                ["Bank Statement", doc.salariedBankStatement || doc.selfEmployedBankStatement],
                                ["Business Proof", doc.businessProof],
                                ["Income Statement", doc.incomeStatement],
                              ].filter(([_, url]) => url && (!Array.isArray(url) || url.length > 0));
                              
                              if (docEntries.length === 0) {
                                return <p key={index} className="text-gray-500">No documents uploaded</p>;
                              }
                              
                              return docEntries.map(([name, url], i) => (
                                <div key={`${index}-${i}`} className="flex items-center justify-between bg-white p-3 rounded-lg border">
                                  <span className="text-sm font-medium">{name}</span>
                                  {Array.isArray(url) ? (
                                    <div className="flex space-x-2">
                                      {url.map((u, idx) => (
                                        <a 
                                          key={idx}
                                          href={u} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                                        >
                                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
                                          </svg>
                                          View {idx + 1}
                                        </a>
                                      ))}
                                    </div>
                                  ) : (
                                    <a 
                                      href={url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                                    >
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 15.5v-11a2 2 0 012-2h16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2z"></path>
                                      </svg>
                                      View
                                    </a>
                                  )}
                                </div>
                              ));
                            })}
                          </div>
                        ) : (
                          <p className="text-gray-500">No documents uploaded</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-3">
                      <button 
                        onClick={() => updateLeadStatus(lead._id, 'approved')}
                        disabled={updatingStatus[lead._id]}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 flex items-center"
                      >
                        {updatingStatus[lead._id] ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Approve
                          </>
                        )}
                      </button>
                      <button 
                        onClick={() => updateLeadStatus(lead._id, 'rejected')}
                        disabled={updatingStatus[lead._id]}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 flex items-center"
                      >
                        {updatingStatus[lead._id] ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Reject
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadAdminPanel;