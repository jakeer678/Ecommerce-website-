import { useState } from "react";
import { contextProduct } from "./contextstore";


const ConextProvider = ({ children }) => {
  const initialValue = localStorage.getItem("idToken");
  const [list, setList] = useState([]);
  const [loginUserToken, setLoginUserToken] = useState(initialValue);

  const isloogedIn = !!loginUserToken;
  console.log(loginUserToken, "ooooo");
  //Recieving token after login and storing token in local storage
  const LoginUserHandle = (loginUserToken) => {
    setLoginUserToken(loginUserToken);
    localStorage.setItem("idToken", loginUserToken);
  };

  //Removing token from the local storage
  const LogoutUserHandler = () => {
    setLoginUserToken(null);
    localStorage.removeItem("idToken", loginUserToken);
  };

  //Adding Products to the cart
  const addproducts = (item) => {
    setList([...list, item]);
  };

  //Removing products from the cart
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
        loginUserToken: loginUserToken,
        setList: setList,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ConextProvider;
