import { Button } from "@mui/material";
import React, { Fragment, useContext } from "react";
import { contextProduct } from "../store/contextstore";
import "./CartList.css";

const CarList = () => {
  const { list, removePRoducts } = useContext(contextProduct);

  return (
    <Fragment>
      <ul>
        {list.map((item) => (
          <div id={item.id} className="list">
            <div>
              <img className="image" src={item?.imageUrl} alt="product_image" />
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>

            <Button
              variant="contained"
              color="warning"
              onClick={() => removePRoducts(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </ul>
    </Fragment>
  );
};

export default CarList;
