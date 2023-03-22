import React from "react";
import ConextProvider from "./components/store/ContextProvider";
import RoutesApp from "./components/RoutesApp";

function App() {
  return (
    <React.Fragment>
      <ConextProvider>
        <RoutesApp />
      </ConextProvider>
    </React.Fragment>
  );
}

export default App;
