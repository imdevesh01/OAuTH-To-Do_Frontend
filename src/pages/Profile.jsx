import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
  let isPresssed = false;

  function refreshPage() {
    window.location.reload(false);
    isPresssed = true;
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
