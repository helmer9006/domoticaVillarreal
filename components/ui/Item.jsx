import React, { useEffect } from "react";
import ItemCount from "./ItemCount";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 240px;
//   height: 300px;
//   background: #fff;
//   color: #333;
//   border-radius: "25px";
//   box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
//   transition: 0.3s;
//   margin: 1.5rem;
//   padding: 1.5rem;

//   :hover {
//     box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
//     transform: scale(1.05, 1.05);
//   }
// `;

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
      <div className="col-sm-3">
        <div className="card m-1">
          <img src={product.images[0].src} class="card-img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <p class="card-text">
              Stock: {stock_quantity > 0 ? stock_quantity : 0}
            </p>

            <a href="#" className="btn btn-outline-primary center">
              <strong>$ {price}</strong>
            </a>

            {/* <div className="d-flex justify-content-around pt-5 pb-4">
              <i
                className="material-icons md-24"
                data-toggle="carrito"
                data-placement="carrito"
                title="carrito"
                style={{ cursor: "pointer" }}
              >
                shopping_cart
              </i>{" "}
              <i
                className="material-icons md-24"
                data-toggle="carrito"
                data-placement="carrito"
                title="carrito"
                style={{ cursor: "pointer" }}
              >
                search
              </i>
            </div> */}

            <ItemCount stock_quantity={stock_quantity} initial={initial} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
