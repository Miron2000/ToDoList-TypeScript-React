import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple lighten-3 px1">
      <a href="/" className="brand-logo">React TODO List</a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">To-Do list</NavLink></li>
        <li><NavLink to="/about">We have</NavLink></li>
      </ul>
    </div>
  </nav>
);