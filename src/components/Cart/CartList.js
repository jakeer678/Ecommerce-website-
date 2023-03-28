import { Button } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { contextProduct } from "../store/contextstore";
import "./CartList.css";

const CartList = () => {
  const { list, removePRoducts, addproducts } = useContext(contextProduct);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     const token = localStorage.getItem("idToken");

  //     if (token) {
  //       try {
  //         const response = await fetch(
  //           `https://crudcrud.com/api/c6a7d2055ab34e19b2e28b161a05f5f3/cart${loginUserToken}`
  //         );
  //         const data = await response.json();

  //         console.log(data, "llllllll");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  //   fetchCartItems();
  // }, [loginUserToken]);

  console.log(list, "oooooooooooooo");
  // const listTwo = []

  // for(let key in list) {
  //   listTwo.push({id:key,...list.item})

  // }
  // console.log(listTwo, "kkkkkjhgzggf")

  return (
    <Fragment>
      <ul>
        {list?.map((item) => (
          <div id={item.id} className="list">
            <div className="listitem">
              <img className="image" src={item.imageUrl} alt="product_image" />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
            <div className="cartbtn">
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => removePRoducts(item.id)}
                >
                  Remove
                </Button>
              </div>
              <div className="cartbtnadd">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  onClick={() => addproducts(item)}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </Fragment>
  );
};

export default CartList;
