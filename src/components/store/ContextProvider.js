import { useState } from "react";
import { contextProduct } from "./contextstore";
const ConextProvider = (props) => {
  const [list, setList] = useState([]);

  const addproducts = (item) => {
    setList([...list, item]);
  };

  const contextData = {
    list,
    addproducts,
  };

  return (
    <contextProduct.Provider value={contextData}>
      {props.children}
    </contextProduct.Provider>
  );
};

export default ConextProvider;
