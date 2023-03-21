import React, { useContext, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cartitem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Dialog } from "@mui/material";
import CarList from "./CarList";
import { contextProduct } from "../store/contextstore";

const CartItem = () => {
  const [open, setOpen] = useState(false);
  const { list } = useContext(contextProduct);

  const quantity = list.length + 1;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button className="cart_container" onClick={handleClickOpen}>
        <div className="cart_text">Cart</div>
        <div>
          <AddShoppingCartIcon>{quantity}</AddShoppingCartIcon>
        </div>
      </button>

      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <div className="cartlist">
          <div className="button_close">
            <h4>Cart Products</h4>
            <button onClick={handleClose}>
              <HighlightOffIcon></HighlightOffIcon>
            </button>
          </div>
          <CarList />
        </div>
      </Dialog>
    </>
  );
};

export default CartItem;
