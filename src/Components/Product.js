import React from "react";
import { Link } from "react-router-dom";

const Product = (prop) => {
  //   console.log(prop);
  const { product, showButton } = prop;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h4>price {product.price}$</h4>
          {/* conditional rending  */}
          {showButton && (
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
