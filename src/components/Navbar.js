import React from "react";
import logo from "../assests/sigma.png";
import "./styles/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-cont">
      <h2>Magnabox Private Limited</h2>
      <img src={logo} className="logo" />
    </div>
  );
};

export default Navbar;
