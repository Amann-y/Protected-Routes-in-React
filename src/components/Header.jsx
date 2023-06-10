import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const clearStorage = () => {
    localStorage.removeItem("isLogged");
  };

  return (
    <nav className="flex justify-around items-center bg-slate-500 text-white py-4">
      <div>Amann</div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/service">
            <li>Service</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          {localStorage.getItem("isLogged") ? (
            <Link to="/login">
              <li onClick={clearStorage}>Logout</li>
            </Link>
          ) : (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}

          {/* <Link to="/login">
            <li>Login</li>
          </Link> */}
          {/* <Link to="/login">
            <li onClick={clearStorage}>Logout</li>
          </Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
