import { useEffect, useState } from "react";
import { contextProduct } from "./contextstore";
import axios from "axios";

const ConextProvider = ({ children }) => {
  const initialValue = localStorage.getItem("idToken");
  const [list, setList] = useState([]);
  const [loginUserToken, setLoginUserToken] = useState(initialValue);
  const [open, setOpen] = useState(false);

  console.log(list, "kkkkkkkkkk");

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
    localStorage.clear();
  };

  const setItems = async () => {
    const response = await axios.get(
      `https://crudcrud.com/api/fe32829e41444151a6bce09fb6796095/cart${localStorage
        .getItem("userEmail")
        .replace(/['@','.']/g, "")}`
    );
    console.log(response.data, "pppppppp");
    setList(response.data);
  };

  //Removing Products from the cart
  const removePRoducts = async (_id) => {
    const response = await axios.delete(
      `https://crudcrud.com/api/fe32829e41444151a6bce09fb6796095/cart${localStorage
        .getItem("userEmail")
        .replace(/['@','.']/g, "")}/${_id}`
    );
    setItems();
    console.log(response.data);
  };

  //Adding Prouducts from the cart
  const addproducts = async (item) => {
    const response = await axios.post(
      `https://crudcrud.com/api/fe32829e41444151a6bce09fb6796095/cart${localStorage
        .getItem("userEmail")
        .replace(/['@','.']/g, "")}`,
      item
    );

    console.log(response.data, "jjjjjj");
    setList([...list, item]);
    setItems();
  };

  const removePRoductsAll = (Id) => {
    const remove = list.filter((item) => item._id === Id);
    setList(remove);
  };
  useEffect(() => {
    setItems();
  }, [loginUserToken]);

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
