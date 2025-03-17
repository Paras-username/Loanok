
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="font-medium text-red-600 py-1 px-5 border-2 border-red-500 rounded-lg shadow-md transition hover:bg-red-600 hover:text-white"
    >
      Log Out
    </button>
  );
};

export default Logout;
