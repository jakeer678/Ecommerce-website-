import React, { lazy, Suspense } from "react";

const ProductList = lazy(() => import("../productList/ProductList"));

const ProductStore = () => {
  return (
    <div>
      <Suspense fallback={<div>please wait....</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ProductStore;
