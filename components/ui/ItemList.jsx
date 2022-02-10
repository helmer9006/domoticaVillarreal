import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useProductsContext } from "../../context/ProductsContext";


const ItemList = ({id}) => {

  const { products, productsCategories, isLoading, isSuccess, isError } =
    useProductsContext();
    const ItemsProducts = id == '0' ? products : productsCategories;
  alert("id router" + id);
  alert("id props" + id);
  console.log(id);
  console.log(typeof id);
  console.log(ItemsProducts);
  console.log(products);

  return (
    <div className=" row d-flex justify-content-start">
      {
        (isError = false ? (
          <p>Error recuperando la lista de productos</p>
        ) : null)
      }
      {ItemsProducts.length > 0
        ? ItemsProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default ItemList;
