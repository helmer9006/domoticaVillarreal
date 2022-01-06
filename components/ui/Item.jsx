import Link from "next/link";
import React, { useEffect } from "react";

const Item = ({ product }) => {
  const {
    id,
    name,
    slug,
    description,
    sku,
    stock_quantity,
    price,
    images: [src],
  } = product;

  const initial = stock_quantity > 0 ? 1 : 0;

  return (
    <>
      <div className="col-sm-3 ">
        <div
          className=" m-1 producto"
          style={{ position: "relative", cursor: "pointer" }}
        >
          <i
            className="material-icons md-24 mt-2 ml-2"
            data-toggle="Lista deseos"
            data-placement="Lista deseos"
            title="Lista deseos"
            style={{ cursor: "pointer", position: "absolute" }}
          >
            favorite_border
          </i>
          <Link href="/item/[id]" as={`/item/${id}`}>
            <img
              src={product.images[0].src}
              className="card-img-top"
              alt={name}
            />
          </Link>
          <div className="card-body">
            <Link href="/item/[id]" as={`/item/${id}`}>
              <h6 className="card-title" style={{ cursor: "pointer" }}>
                {name}
              </h6>
            </Link>
            <p className="card-text">
              Stock: {stock_quantity > 0 ? stock_quantity : 0}
            </p>

            <Link href="#">
              <a className="btn btn-outline-primary center">
                <strong>$ {price}</strong>
              </a>
            </Link>
            {/* 
            <div className="d-flex justify-content-around pt-5 pb-4">
              <i
                className="material-icons md-24"
                data-toggle="carrito"
                data-placement="carrito"
                title="carrito"
                style={{ cursor: "pointer" }}
              >
                shopping_cart
              </i>
              <i
                className="material-icons md-24"
                data-toggle="favorito"
                data-placement="favorito"
                title="favorito"
                style={{ cursor: "pointer" }}
              >
                favorite_border
              </i>
              <Link href="/item/[id]" as={`/item/${id}`}>
                <i
                  className="material-icons md-24"
                  data-toggle="buscar"
                  data-placement="buscar"
                  title="buscar"
                  style={{ cursor: "pointer" }}
                >
                  search
                </i>
              </Link>
            </div> */}
            {/* <ItemCount stock_quantity={stock_quantity} initial={initial} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
