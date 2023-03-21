import { useState } from "react";
import { contextProduct } from "./contextstore";
const ConextProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addproducts = (item) => {
    setList([...list, item]);
  };
 
  const removePRoducts = (Id) => {
    const remove = list.filter(item=>item.id!==Id)
    setList(remove)
  }

  return (
    <contextProduct.Provider
      value={{
        list: list,
        addproducts: addproducts,
        removePRoducts:removePRoducts
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ConextProvider;
