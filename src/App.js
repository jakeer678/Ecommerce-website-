import React from "react";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import About from "./components/Home/About";
// import Home from "./components/Home/Home";
// import Store from "./components/Home/Store";
import Header from "./components/Navbar/Header";
import ProductList from "./components/productList/ProductList";
import ConextProvider from "./components/store/ContextProvider";

function App() {
  return (
    
    <React.Fragment>
     <ConextProvider>

     
        {/* <div>
         
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/srore">
              <Store />
            </Route>
            <Route path="/features">
              <Store />
            </Route>
          </Routes>
        </div> */}
      
        <Header />
      <ProductList />
      </ConextProvider>
    </React.Fragment>
  );
}

export default App;
