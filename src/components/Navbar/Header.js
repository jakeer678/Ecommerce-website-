import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { contextProduct } from "../store/contextstore";
import "./Header.css";

const Header = () => {
  const { isloogedIn, LogoutUserHandler } = useContext(contextProduct);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "oooooopppp");
  const logout = () => {
    alert("Are you sure want to logout");
    LogoutUserHandler();
    navigate("/");
  };

  const loginhandleNav = () => {
    if (!isloogedIn) {
      navigate("/");
    } else {
      navigate("/loginAuth");
    }
  };
  const loginPop = () => {
    alert("Please login");
  };
  return (
    <section>
      <header className="cotainer">
        {!isloogedIn && (
          <div>
            <button onClick={loginhandleNav}>Products tab</button>
          </div>
        )}

        <nav>
          <ul>
            {isloogedIn && (
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            )}
            {isloogedIn && (
              <li>
                <NavLink to="/store">Store</NavLink>
              </li>
            )}
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
            {!isloogedIn && location.pathname == "/loginAuth" && (
              <button onClick={loginPop}>
                <NavLink to="/loginAuth">Login</NavLink>
              </button>
            )}

            {isloogedIn && (
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
