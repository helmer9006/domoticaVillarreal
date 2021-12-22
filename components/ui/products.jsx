import React from "react";
import ItemCount from "./ItemCount";

const products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img>Imagen</img>
          <h1>Producto</h1>
          <p>Descricion del producto </p>
        </div>
        <div className="col-sm">
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default products;
