import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.svg";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="ms-5 px-2 my-3">
          <img src={logo} alt="Logo" width="30" height="24" className="me-2" />

          <span className="navbar-brand  h1">HTML Editor</span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
