import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple lighten-3 paddingx1">
      <a href="/" className="brand-logo">React TODO List</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">To-Do list</a></li>
        <li><a href="/">We have</a></li>
      </ul>
    </div>
  </nav>
);