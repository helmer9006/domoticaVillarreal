import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useProductsContext } from "../../context/ProductsContext";
import { useRouter } from "next/router";

const ItemList = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  alert('id router'+id)
  alert('id props'+id)

  const { products, productsCategories, isLoading, isSuccess, isError } =
    useProductsContext();
console.log(typeof(id));
  const ItemsProducts = id > 0 ? productsCategories : products;
  console.log(id);
  console.log(typeof id);
  console.log(id);
  console.log(ItemsProducts);
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
