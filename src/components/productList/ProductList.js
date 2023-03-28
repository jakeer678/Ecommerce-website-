import React, { useContext } from "react";
import { products } from "./products";
import "./ProductList.css";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { contextProduct } from "../store/contextstore";

const ProductList = () => {
  const { handleClickOpen } = useContext(contextProduct);

  return (
    <>
      <section>
        <ul className="list">
          {products?.map((item) => (
            <div key={item?.id}>
              <div className="imagelist">
                <Link to={`products/${item.id}`}>
                  <img src={item?.imageUrl} alt="product_image" />
                </Link>
              </div>
              <div className="list_item">
                <div>
                  <li>
                    <Link to={`products/${item.id}`}>{item?.title}</Link>{" "}
                  </li>
                  <li>${item?.price}</li>
                </div>
                <AddProduct id={item.id} item={item} />
                {console.log(item,"jakeeeeeeee")}
              </div>
            </div>
          ))}
        </ul>
      </section>
      <section>
        <div className="btnottom">
          <Button variant="contained" color="secondary" size="medium" onClick={handleClickOpen}>
            see the cart
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProductList;
