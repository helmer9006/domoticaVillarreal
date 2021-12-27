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
  } = product.product;
  const initial = stock_quantity > 0 ? 1 : 0;
  return (
    <div className="row mt-5">
      <div className="col-md-6">
          <img src={images[0].src} alt="" />
      </div>
      <div className="col-md-6">
        <h3>{name}</h3>
        <h5 className="mt-4">{short_description}</h5>
        <ItemCount stock_quantity={stock_quantity} initial={initial} />
      </div>
    </div>
  );
};

export default ItemDetail;
