import { Button } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { contextProduct } from "../store/contextstore";
import "./CartList.css";

const CartList = () => {
  const { list, removePRoducts, addproducts } = useContext(contextProduct);
  console.log(list, "ttttttt");
  return (
    <Fragment>
      <ul>
        {list?.map((item, index) => (
          <div id={item._id} className="list">
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
                  onClick={() => removePRoducts(item._id)}
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
