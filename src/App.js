import React from "react";
import ConextProvider from "./components/store/ContextProvider";
import RoutesApp from "./components/RoutesApp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <ConextProvider>
        <RoutesApp />
        <Footer />
      </ConextProvider>
    </React.Fragment>
  );
}

export default App;
