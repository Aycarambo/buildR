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
            <img src={swipeUrl} alt="" />
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/likes">
            <img src={heartUrl} alt="" />
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/messages">
            <img src={mailUrl} alt="" />
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/account">
            <img src={accountUrl} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
