import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { products } from "../productList/products";
import "./CartList.css";

const CarList = () => {
  return (
    <Fragment>
      <ul>
        {products.map((item) => (
          <div id={item.id} className="list">
            <div>
              <img className="image" src={item?.imageUrl} alt="product_image" />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>

            <Button variant="contained" color="warning">
              Remove
            </Button>
          </div>
        ))}
      </ul>
    </Fragment>
  );
};

export default CarList;
