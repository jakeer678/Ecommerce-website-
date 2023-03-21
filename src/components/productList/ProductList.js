import React from "react";
import { products } from "./products";
import "./ProductList.css";
import AddProduct from "./AddProduct";

const ProductList = () => {
  return (
    <div>
      <ul className="list">
        {products?.map((item) => (
          <div key={item.title}>
            <div className="imagelist">
              <img src={item?.imageUrl} alt="product_image" />
            </div>
            <div className="list_item">
              <div>
                <li>{item.title}</li>
                <li>${item.price}</li>
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
