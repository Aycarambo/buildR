import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__pages">
        <li className="nav__item">
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/likes">
            <img src="" alt="" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/messages">
            <img src="" alt="" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/account">
            <img src="" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
