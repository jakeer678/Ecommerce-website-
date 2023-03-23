import React, { Fragment } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./Navbar/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ProductStore from "./pages/ProductStore";
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<ProductStore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default RoutesApp;
