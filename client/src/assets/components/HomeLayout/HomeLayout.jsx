import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      footer <br />
      cookies
    </>
  );
};

export default HomeLayout;
