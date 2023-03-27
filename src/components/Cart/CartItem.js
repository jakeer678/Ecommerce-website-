import React, { useContext, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cartitem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Dialog } from "@mui/material";
import CartList from "./CartList";
import { contextProduct } from "../store/contextstore";

const CartItem = () => {
  const [open, setOpen] = useState(false);
  const { list } = useContext(contextProduct);

  const quantity = list.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const total = list.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const totalAmount = total.toFixed(2);

  return (
    <>
      <button className="cart_container" onClick={handleClickOpen}>
        <div className="cart_text">Cart</div>
        <div>
          <AddShoppingCartIcon>
            <span>{quantity}</span>
          </AddShoppingCartIcon>
        </div>
      </button>

      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <div className="cartlist">
          <div className="button_close">
            <h5>Cart Products</h5>
            <button onClick={handleClose}>
              <HighlightOffIcon></HighlightOffIcon>
            </button>
          </div>
          <CartList />
          <div>Tota amount $ {totalAmount}</div>
        </div>
      </Dialog>
    </>
  );
};

export default CartItem;
