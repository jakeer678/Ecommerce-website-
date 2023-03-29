import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./products";
import "./ProductPage.css";

const ProductPage = () => {
  const params = useParams();

  const productDeatail = products?.find((item) => item.id == params.productId);
  console.log(productDeatail, "iiiiii");
  return (
    <div>
      <section>
        <h4>Product Detail</h4>
        <p>{productDeatail?.title}</p>
        <div className="routespage">
          <img src={productDeatail.imageUrl} alt="img" />
          <div>{productDeatail.description}</div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
