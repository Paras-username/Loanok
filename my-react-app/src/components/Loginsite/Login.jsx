import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx"; // Importing hamburger icon

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {isAuthenticated ? (
        // Dropdown Menu Button (Hamburger)
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full border bg-gray-100 shadow-md hover:bg-gray-200"
        >
          <RxHamburgerMenu className="w-5 h-5" />
        </button>
      ) : (
        // Login Button
        <button
          onClick={loginWithRedirect}
          className="px-5 py-2 rounded-full bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-600"
        >
          Login
        </button>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
          <a
            href="/loanstatus"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            My Application Status
          </a>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
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
