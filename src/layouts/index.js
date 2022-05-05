import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {" "}
      <header>
        <h1>Film App</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>
      </header>
      <Outlet />
      <footer>Footer items</footer>
    </>
  );
};

export default Layout;
