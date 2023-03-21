import React from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import "./Header.css";

const Header = () => {
  return (
    <div classname="cotainer">
      <nav>
        <ul className="nav_item">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink to="/Features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/Features">Features</NavLink>
          </li>
          <CartItem />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
