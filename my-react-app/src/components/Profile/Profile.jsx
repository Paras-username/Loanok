import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center gap-2">
        <img src={user.picture} alt={user.name} className="w-10 h-10 rounded-full" />
        <h2 className="text-lg font-medium">{user.name}</h2>
      </div>
    )
  );
};

export default Profile;
