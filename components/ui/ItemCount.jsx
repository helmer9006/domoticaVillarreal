import React, { useState, useEffect } from "react";

const ItemCount = ({ stock_quantity, initial }) => {
  const [onAdd, setOnAdd] = useState(initial);
  const handledSumar = () => {
    if (onAdd >= stock_quantity) return;
    setOnAdd(onAdd + 1);
  };
  const handledRestar = () => {
    if (onAdd <= 0) return;
    setOnAdd(onAdd - 1);
  };
  return (
    <div className="">
      <div className="d-flex justify-content-between border align-items-center my-3 p-1">
        <span
          className="material-icons md-24 gap-3"
          onClick={handledRestar}
          style={{ cursor: "pointer" }}
        >
          remove
        </span>
        <h6 className="m-2">
          <strong>{onAdd}</strong>
        </h6>
        <span
          className="material-icons "
          onClick={handledSumar}
          style={{ cursor: "pointer" }}
        >
          add
        </span>
      </div>
      <div>
        <div className="row">
          <div className="col text-center ">
            <button className="btn btn-primary btn-lg btn-block">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
