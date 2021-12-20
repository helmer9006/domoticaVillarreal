import React from "react";
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

const Item = ({ id, name, slug, images, price, regular_price }) => {

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src=".." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {name}
          </p>
          <a href="#" className="btn btn-primary">
            añadir al carrito
          </a>
        </div>
        <h1>precio {price}</h1>
      </div>
    </>
  );
};

export default Item;
