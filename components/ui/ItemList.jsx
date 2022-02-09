import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useProductsContext } from "../../context/ProductsContext";

const ItemList = () => {
  const { cat, products, productsCategories, isLoading, isSuccess, isError } =
    useProductsContext();
  const ItemsProducts = cat > 0 ? productsCategories : products;
  console.log(cat);
  console.log(ItemsProducts);
  return (
    <div className=" row d-flex justify-content-start">
      {
        (isError = false ? (
          <p>Error recuperando la lista de productos</p>
        ) : null)
      }
      {ItemsProducts
        ? ItemsProducts.map((product) => (
            <Item key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default ItemList;
