import { useState } from "react";
import { contextProduct } from "./contextstore";
const ConextProvider = ({ children }) => {
  const initialValue = localStorage.getItem("idToken");
  const [list, setList] = useState([]);
  const [loginUserToken, setLoginUserToken] = useState(initialValue);

  const isloogedIn = !!loginUserToken;
  console.log(loginUserToken, "ooooo");
  const LoginUserHandle = (loginUserToken) => {
    setLoginUserToken(loginUserToken);
    localStorage.setItem("idToken", loginUserToken);
  };

  const LogoutUserHandler = () => {
    setLoginUserToken(null);
    localStorage.removeItem("idToken", loginUserToken);
  };

  const addproducts = (item) => {
    setList([...list, item]);
  };

  const removePRoducts = (Id) => {
    const remove = list.filter((item) => item.id !== Id);
    setList(remove);
  };

  return (
    <contextProduct.Provider
      value={{
        list: list,
        addproducts: addproducts,
        removePRoducts: removePRoducts,
        isloogedIn: isloogedIn,
        LoginUserHandle: LoginUserHandle,
        LogoutUserHandler: LogoutUserHandler,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ConextProvider;
