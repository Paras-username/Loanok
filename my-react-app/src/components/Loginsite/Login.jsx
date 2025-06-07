// import { useAuth0 } from "@auth0/auth0-react";
// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx"; // Importing hamburger icon
// // import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Login = () => {

//   // const navigate = useNavigate();
//   const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="relative">
//       {isAuthenticated ? (
//         // Dropdown Menu Button (Hamburger)
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="p-2 rounded-full border bg-gray-100 shadow-md hover:bg-gray-200"
//         >
//           <RxHamburgerMenu className="w-5 h-5" />
//         </button>
//       ) : (
//         // Login Button
//         <button
//           onClick={loginWithRedirect}
//           className="px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       )}

//       {/* Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
//         <Link
//           to="/loanstatus" // 👈 Using Link instead of navigate
//           className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//         >
//           My Application Status
//         </Link>
//         <button
//           onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
//           className="w-full font-medium text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//         >
//           Logout
//         </button>
//       </div>
//       )}
//     </div>
//   );
// };

// export default Login;





import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State to handle menu toggle (dropdown)
  const [menuOpen, setMenuOpen] = useState(false);
  // State to track if user is logged in (based on localStorage)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount and whenever localStorage changes
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/"); // redirect to home or login page after logout
  };

  if (!isLoggedIn) {
    // Show login button if NOT logged in
    return (
      <button
        onClick={() => navigate("/login")}
        className="px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-600"
      >
        Login
      </button>
    );
  }

  // If logged in, show hamburger menu with dropdown
  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded-full border bg-gray-100 shadow-md hover:bg-gray-200"
      >
        <RxHamburgerMenu className="w-5 h-5" />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border z-10">
          <button
            onClick={() => {
              navigate("/loanstatus");
              setMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Application Status
          </button>
          <button
            onClick={handleLogout}
            className="w-full font-medium text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;

