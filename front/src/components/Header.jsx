import React from "react";

import logoUrl from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logoUrl} alt="" className="header__logo" />
    </header>
  );
};

export default Header;
