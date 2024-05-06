import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductDetails = () => {
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Product product={product} showButton={false} />
    </>
  );
};

export default ProductDetails;
