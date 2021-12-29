import React from "react";
import ItemCount from "./ItemCount";
const ItemDetail = (product) => {
  const {
    name,
    short_description,
    stock_quantity,
    sku,
    price,
    regular_price,
    images,
    categories,
  } = product.product;
  const initial = stock_quantity > 0 ? 1 : 0;
  const stock =
    stock_quantity > 0 ? (
      <h4 style={{ color: "green", margin: "50px 0" }}>
        Stock disponible: {stock_quantity}
      </h4>
    ) : (
      <h5 style={{ color: "red" }}>No disponible</h5>
    );

  const categorias = categories.map((item) => (
    <spam className="">{item.name},</spam>
  ));

  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <img src={images[0].src} alt="" />
      </div>
      <div className="col-md-6">
        {categorias}
        <h3 className ="mt-2">{name}</h3>
        {stock}
        <h5 className="mt-4">{short_description}</h5>
        <div className="my-5">
          <ItemCount stock_quantity={stock_quantity} initial={initial} />{" "}
        </div>
        <h1>$ {regular_price}</h1>
      </div>
    </div>
  );
};

export default ItemDetail;
