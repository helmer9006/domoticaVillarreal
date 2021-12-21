import React, { useState, useEffect } from "react";
import Item from "./Item";

const ItemList = ({ query }) => {
  return (
    <div className="d-flex justify-content-between">
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
