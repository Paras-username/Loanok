import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Link } from "react-router-dom";
import { Briefcase, Users, Building2, Bed } from "lucide-react";

const Centraladminpanel = () => {
  // const { isAuthenticated, isLoading, user } = useAuth0();

  // const adminEmails = ["poriaparas2@gmail.com"];
  // const isAdmin = user?.email && adminEmails.includes(user.email);

  // if (isLoading) {
  //   return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  // }

  // if (!isAuthenticated || !isAdmin) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          Central Admin Panel
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Loan Management */}
          <Link
            to="/adminpanel"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center"
          >
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Loan Management</h3>
            <p className="text-gray-500 mt-2 text-sm text-center">
              View and update loan applications.
            </p>
          </Link>

          {/* Career Management */}
          <Link
            to="/adminpanel/career"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center"
          >
            <Users className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Career Management</h3>
            <p className="text-gray-500 mt-2 text-sm text-center">
              Manage job applications and career posts.
            </p>
          </Link>

          {/* Hotels */}
          <Link
            to="/cibil_admin"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center"
          >
            <Building2 className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">CIBIL SCORE</h3>
            <p className="text-gray-500 mt-2 text-sm text-center">
              To Check CIBIL Score.
            </p>
          </Link>

          {/* Rooms */}
          <Link
            to="/admin/rooms"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-center"
          >
            <Bed className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">XYZ</h3>
            <p className="text-gray-500 mt-2 text-sm text-center">
              XYZ......
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Centraladminpanel;
