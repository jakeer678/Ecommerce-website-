import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./Cartitem.css";
import { Button, Dialog } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { products } from "../productList/products";

const CartItem = () => {
  const [open, setOpen] = useState(false);

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
          <AddShoppingCartIcon>{}</AddShoppingCartIcon>
        </div>
      </button>

      <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
        <div className="popup">
          <div className="cartlist">
            <div className="button_close">
              <h4>Cart Products</h4>
              <button onClick={handleClose}>
                <HighlightOffIcon />
              </button>
            </div>

            <ul>
              {products.map((item) => (
                <div id={item.id} className="list">
                  <div>
                    <img
                      className="image"
                      src={item?.imageUrl}
                      alt="product_image"
                    />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>

                  <Button variant="contained" color="warning">
                    Remove
                  </Button>
                </div>
              ))}
            </ul>
          </div>
          <div></div>
        </div>
      </Dialog>
    </>
  );
};

export default CartItem;
