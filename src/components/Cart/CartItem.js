import React, { useContext, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cartitem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, Dialog } from "@mui/material";
import CartList from "./CartList";
import { contextProduct } from "../store/contextstore";

const CartItem = () => {
  const { list, handleClickOpen, open, removePRoductsAll, handleClose } =
    useContext(contextProduct);

  const quantity = list.length;

  const total = list.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const totalAmount = total.toFixed(2);

  const purchaseProduct = () => {
    if (list.length === 0) {
      alert("You have Nothing in Cart , Add some products to purchase !");
    } else if (list.length > 0) {
      alert("Thanks for the purchase");
      removePRoductsAll();
    }
  };

  return (
    <>
      <button className="cart_container" onClick={handleClickOpen}>
        <div className="cart_text">Cart </div>
        <div>
          <AddShoppingCartIcon />
        </div>
        {quantity}
      </button>

      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <div className="cartlist">
          <div className="button_close">
            <h5>Cart Products</h5>
            <button onClick={handleClose}>
              <HighlightOffIcon />
            </button>
          </div>
          <div>
            <CartList />
          </div>

          <div className="total">Tota amount $ {totalAmount}</div>
        </div>
        <div className="purchase">
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            type="submit"
            onClick={purchaseProduct}
          >
            Purchase
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default CartItem;
