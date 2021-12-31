import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({ query }) => {
  console.log(query);
  return (
    <div className=" row d-flex justify-content-start">
      {query.isError ? <p>Error recuperando la lista de productos</p> : null}
      {query.data
        ? query.data.map((product) => (
            <Item key={product.id} product={product} />
          ))
        : null}
    </div>
  );
};

export default ItemList;
