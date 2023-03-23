import React from "react";
import { products } from "./products";
import "./ProductList.css";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
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
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
