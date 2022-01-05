import React, { useState } from "react";

const ItemCount = ({ stock_quantity, initial, onAdd }) => {
  const [quantityAdd, setOnAdd] = useState(initial);
  const handledIncrement = () => {
    if (quantityAdd >= stock_quantity) return;
    setOnAdd(quantityAdd + 1);
  };
  const handledDecrement = () => {
    if (quantityAdd <= 1) return;
    setOnAdd(quantityAdd - 1);
  };
  return (
    <div className="">
      <div className="d-flex justify-content-between border align-items-center my-3 p-1">
        <span
          className="material-icons md-24 gap-3"
          onClick={handledDecrement}
          style={{ cursor: "pointer" }}
        >
          remove
        </span>
        <h6 className="m-2">
          <strong>{quantityAdd}</strong>
        </h6>
        <span
          className="material-icons "
          onClick={handledIncrement}
          style={{ cursor: "pointer" }}
        >
          add
        </span>
      </div>
      <div>
        <div className="row">
          <div className="col text-center ">
            <button
              onClick={onAdd}
              className="btn btn-primary btn-lg btn-block"
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
