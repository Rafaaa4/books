import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {

  return (
    <nav>
      <span>
        Books <h1>Home</h1>
      </span>

      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/books">Books</Link>
        </li>
      </ul>

    
    </nav>
  );
};

export default Navbar;
