import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextProduct } from "../store/contextstore";
import ProductTab from "./ProductTab";

const StartingPage = () => {
  const { isloogedIn } = useContext(contextProduct);
  const navigate = useNavigate();

  if (!isloogedIn) {
    navigate("/loginAuth");
  }

  return (
    <>
      <ProductTab />
    </>
  );
};

export default StartingPage;
