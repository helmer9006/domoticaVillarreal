import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useProductsContext } from "../../context/ProductsContext";

const ItemList = ({ id }) => {
  const { products, isLoading, isSuccess, isError } = useProductsContext();
  console.log(products);

  return (
    <div className=" row d-flex justify-content-start">
      {
        (isError = false ? (
          <p>Error recuperando la lista de productos</p>
        ) : null)
      }
      {products
        ? products.map((product) => <Item key={product.id} product={product} />)
        : null}
    </div>
  );
};

export default ItemList;
