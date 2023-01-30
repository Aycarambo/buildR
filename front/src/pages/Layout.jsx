import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};

export default Layout;
