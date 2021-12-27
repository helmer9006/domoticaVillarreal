import React from "react";
import ItemList from "./ItemList";
import useProducts from "./../hook/useProducts";

const ItemListContainer = () => {
  const query = useProducts();

  return (
    <>
      <ItemList query={query} />
    </>
  );
};

export default ItemListContainer;
