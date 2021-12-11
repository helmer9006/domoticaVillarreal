import React from "react";

const cartWidget = () => {
  return (
    <div style={{ position: "relative" }}>
      <i
        className="material-icons md-48"
        data-toggle="carrito"
        data-placement="carrito"
        title="carrito"
        style={{ cursor: "pointer" }}
      >
        shopping_cart
      </i>
      <span style={{ position: "absolute", color: "red" }}>4</span>
    </div>
  );
};

export default cartWidget;
