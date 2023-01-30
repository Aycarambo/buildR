import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Layout;
