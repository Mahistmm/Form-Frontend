import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">Home</div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/add">Addperson</Link>
          <Link to="/view">view</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
