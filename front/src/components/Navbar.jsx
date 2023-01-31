import React from "react";
import { Link } from "react-router-dom";

import accountUrl from "../assets/images/iconAccount.svg";
import heartUrl from "../assets/images/iconHeart.svg";
import mailUrl from "../assets/images/iconMail.svg";
import swipeUrl from "../assets/images/iconSwipe.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__pages">
        <li className="navbar__item">
          <Link to="/">
            <span className="icon-swipe"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/likes">
            <span className="icon-heart"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/messages">
            <span className="icon-messages"></span>
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/account">
            <span className="icon-people"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
