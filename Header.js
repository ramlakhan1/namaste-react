import React, { useState } from "react";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  return (
    <div id="header" className="header">
      <div className="logo-container">
        <img
          className="app-logo"
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Logo"
        />
        <span className="food-title">
          <i>
            <b>foodeis</b>
          </i>
        </span>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="filter-btn login"
          onClick={() => {
            loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
          }}
        >
          {loginbtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
