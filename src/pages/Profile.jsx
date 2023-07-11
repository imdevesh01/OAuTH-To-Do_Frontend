import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div>
      <h1>Hey {user.name}....How's it going :)</h1><br />
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
