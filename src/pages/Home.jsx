import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">

   
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/campaignmanager">Campaignmanager</Link>
        </li>
        <li>
          <Link to="/campaign">Campaign</Link>
        </li>
        <li>
          <Link to="/signupone">SignupOne</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
