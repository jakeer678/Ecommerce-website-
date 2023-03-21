import React from "react";
import CartItem from "../Cart/CartItem";
import "./Header.css";

const Header = () => {
  return (
    <div classname="cotainer">
      <nav>
        <ul className="nav_item">
          <li>Home</li>
          <li>About</li>
          <li>store </li>
          <li>Features</li>
          <CartItem />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
