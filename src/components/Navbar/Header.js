import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import "./Header.css";

const Header = () => {
  return (
    <div classname="cotainer">
      <nav>
        <ul className="nav_item">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <li>
            <Link to="/Features">Features</Link>
          </li>
          <CartItem />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
