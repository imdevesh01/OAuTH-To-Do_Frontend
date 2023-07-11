import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  function refreshPage() {
    window.location.reload(false);
  }

  
  return (loading ? (
    <Loader />
  ) : (
    <div>
      <br />
      <button onClick={refreshPage} >Fetch your latest details !</button>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  ));

};

export default Profile;
