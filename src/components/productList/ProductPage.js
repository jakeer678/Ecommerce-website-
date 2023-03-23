import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./products";

const ProductPage = () => {
  const params = useParams();

  const productDeatail = products?.find((item) => item.id == params.productId);
  console.log(products, "iiiiii");
  return (
    <div>
      <section>
        <h4>Product Detail</h4>
        <p>{productDeatail?.title}</p>
        <div className="routespage">
        <img src={productDeatail.imageUrl} alt="img" />
        <p>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now. , The things we are accusing of these in
          the explication of the truth receives from the flattery of her will
          never be the trouble and they are refused to the pleasures and the
          pleasures of the pain, explain the treatment of excepturi of the
          blessed sufferings. I never said will unfold in him receives at
          another time he may please the one that those works, we are less than
          they, this refused to the pleasures of deleniti? Those are! Will
          </p>
        </div>
        
      
      </section>
    </div>
  );
};

export default ProductPage;
