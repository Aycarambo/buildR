import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__pages">
        <li className="navbar__item">
          <NavLink to="/" className={({ isActive }) => isActive && "active"}>
            <span className="icon-swipe"></span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/likes"
            className={({ isActive }) => isActive && "active"}
          >
            <span className="icon-heart"></span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/messages"
            className={({ isActive }) => isActive && "active"}
          >
            <span className="icon-messages"></span>
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/account"
            className={({ isActive }) => isActive && "active"}
          >
            <span className="icon-people"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
