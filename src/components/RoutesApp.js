import React, { Fragment } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./Navbar/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";

import LoginAuth from "./Login/LoginAuth";
import NoPage from "./pages/NoPage";
import ProductStore from "./pages/ProductStore";
import StartingPage from "./pages/StartingPage";
import ProductPage from "./productList/ProductPage";

const RoutesApp = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <div>
                <Header />
                <Outlet />
              </div>
            }
          >
            <Route path="/" exact element={<StartingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<ProductStore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store/products/:productId" element={<ProductPage />} />
            <Route path="/loginAuth" element={<LoginAuth />} />
            <Route path="*" element={<NoPage />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default RoutesApp;
