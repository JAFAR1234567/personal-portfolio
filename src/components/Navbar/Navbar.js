import { Link, NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
