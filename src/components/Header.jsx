import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context, server } from "../main";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged Out Successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const quotes = ["You may delay, but time will not !","A year from now you may wish you had started today !","Don’t let yesterday take up too much of today !","Never put off for tomorrow, what you can do today !","Opportunities don't happen, you create them !"]

  const ran = Math.floor(Math.random()*quotes.length);

  // document.getElementById("quo").innerHTML = quotes[ran];
  return (
    <nav className="header">
      <div>
        <h2>OAuTH-ToDo</h2>
        <p>Take Oath and Conquer your Dreams....</p>
      </div>
    <h3 id="quo" >{quotes[ran]}</h3>
      <article>
        <Link to={"/"}>Home</Link>
        {/* in Development phase */}
        {/* <Link to={"/profile"}>Profile</Link> */}
        {isAuthenticated ? (
          <button disabled={loading} onClick={logoutHandler} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
