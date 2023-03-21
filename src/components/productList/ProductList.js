import React from "react";
import { products } from "./products";
import "./ProductList.css";

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

              <div>
                <button type="button" class="btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
