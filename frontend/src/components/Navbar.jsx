import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="main">
      <img
        className="logo"
        src="https://bitapps.pro/wp-content/uploads/2023/07/bit-form-icon.svg"
        alt=""
      />
      <ul className="nav">
        <li className="navitems">
          <Link style={{ color: "white" }} to="/">
            <i class="fa-solid fa-circle-plus "></i>
          </Link>
        </li>
        <li className="navitems">
          <Link style={{ color: "white" }} to="/view">
            <i class="fa-solid fa-file "></i>
          </Link>
        </li>
        <li className="navitems">
          <Link style={{ color: "white" }} to="/login">
            <i class="fa-solid fa-right-to-bracket "></i>
          </Link>
        </li>
      </ul>

      <i
        class="fa-solid fa-right-from-bracket"
        style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
        onClick={() => {
          localStorage.removeItem("name");
          localStorage.removeItem("email");
          window.location.reload();
        }}
      ></i>
    </div>
  );
};

export default Navbar;
