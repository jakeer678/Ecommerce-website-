import { Button } from "@mui/material";
import React, { useContext } from "react";
import { contextProduct } from "../store/contextstore";

const AddProduct = (props) => {
  const { addproducts } = useContext(contextProduct);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const id = props.id
    addproducts(props.item, id);
  };

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <Button variant="contained" type="submit">
          Add to Cart
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
