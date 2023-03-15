import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="active">
          <Link to="/remote1">Remote1</Link>
        </li>
        <li className="active">
          <Link to="/remote2">Remote2</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
