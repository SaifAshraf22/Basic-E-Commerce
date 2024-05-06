import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };
  const getCategoryType = (name) => {
    fetch(`${api_url}/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getProduct = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container ">
        <button
          onClick={() => {
            getProduct();
          }}
          className="btn btn-info "
        >
          All
        </button>
        {category.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getCategoryType(cat);
              }}
              className="btn btn-info "
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-3">
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
