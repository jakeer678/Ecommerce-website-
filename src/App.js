import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
// import ProductList from "./components/productList/ProductList";
import ConextProvider from "./components/store/ContextProvider";
import Features from "./components/pages/Features";
import NoPage from "./components/pages/NoPage";

// import RouteLayout from "./components/Navbar/RouteLayout";
// import NoPage from "./components/pages/NoPage";

// import RouteLayout from "./components/Navbar/RouteLayout";

// const routers = createBrowserRouter([
//   {
//     path: "/",
//     element: <RouteLayout />,
//     cildren: [
//       { path: "/", element: <Home /> },
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About /> },
//       { path: "/about", element: <Features /> },
//       { path: "*", element: <NoPage /> },
//     ],
//   },
// ]);

const routesElement = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/store" element={<Store />}></Route>
    <Route path="/features" element={<Features />}></Route>
    <Route path="*" element={<NoPage />}></Route>
  </Route>
);
const routes = createBrowserRouter(routesElement);
function App() {
  return (
    <React.Fragment>
      <ConextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </ConextProvider>
    </React.Fragment>
  );
}

export default App;
