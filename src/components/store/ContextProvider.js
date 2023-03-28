import { useEffect, useState } from "react";
import { contextProduct } from "./contextstore";
import axios from "axios";

const ConextProvider = ({ children }) => {
  const initialValue = localStorage.getItem("idToken");
  const [list, setList] = useState([]);
  const [loginUserToken, setLoginUserToken] = useState(initialValue);
  const [open, setOpen] = useState(false);


// const userEmail = localStorage.getItem("userEmail").replace(/['@','.']/g,"")

// console.log(userEmail, "kkkkkkkkkkk")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const isloogedIn = !!loginUserToken;
  console.log(loginUserToken, "ooooo");
  //Recieving token after login and storing token in local storage
  const LoginUserHandle = (idToken, userEmail) => {
    setLoginUserToken(idToken);
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("userEmail", userEmail);
  };

  //Removing token from the local storage
  const LogoutUserHandler = () => {
    setLoginUserToken(null);

    // localStorage.removeItem("idToken", loginUserToken);
    localStorage.clear();
  };

  const setItems = async () => {
    const response = await axios.get(`https://crudcrud.com/api/e9abe45a40cd4e4f84ec7f42b0fb4aad/cart${localStorage.getItem("userEmail").replace(/['@','.']/g,"")}`)
    console.log('CrudCrud',response.data);
    setList(response.data)
  };
  const addproducts = async (item) => {

    const response = await axios.post(`https://crudcrud.com/api/e9abe45a40cd4e4f84ec7f42b0fb4aad/cart${localStorage.getItem("userEmail").replace(/['@','.']/g,"")}`
    ,{list}
    );
    console.log(response);
    setItems();
  }

  //Adding Products to the cart
  // const addproducts = (item) => {
  //   setList([...list, item]);
  // };

  //Removing products from the cart
  const removePRoducts = (Id) => {
    const remove = list.filter((item) => item.id !== Id);
    setList(remove);
  };

  //remove all products from the cart
  const removePRoductsAll = (Id) => {
    const remove = list.filter((item) => item.id === Id);
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
        removePRoductsAll: removePRoductsAll,
        handleClickOpen: handleClickOpen,
        open: open,
        handleClose: handleClose,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ConextProvider;
