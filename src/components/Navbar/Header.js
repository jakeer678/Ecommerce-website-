import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { contextProduct } from "../store/contextstore";
import "./Header.css";

const Header = () => {
  const { isloogedIn, LogoutUserHandler } = useContext(contextProduct);

  const navigate = useNavigate();

  const logout = () => {
    LogoutUserHandler();
    navigate("/loginAuth");
  };

  return (
    <header className="cotainer">
      {isloogedIn && (
        <div>
          <NavLink to="/" className="home">
            Home
          </NavLink>
        </div>
      )}
      <nav>
        <ul>
          {isloogedIn && (
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          )}

          {isloogedIn && (
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          )}
          {isloogedIn && (
            <li>
              <CartItem />
            </li>
          )}
          {!isloogedIn && (
            <li>
              <NavLink to="/loginAuth">Login</NavLink>
            </li>
          )}
          {isloogedIn && (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
