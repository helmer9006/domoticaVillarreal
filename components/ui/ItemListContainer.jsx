import React from "react";
import styled from "styled-components";

const ItemListContainer = ({ productos }) => {
  const Card = styled.div`
    width: 240px;
    height: 300px;
    background: #fff;
    color: #333;
    border-radius: "25px";
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 1.5rem;
    padding: 1.5rem; 
    

    :hover {
      box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
      transform: scale(1.05, 1.05);
    }
  `;

  return (
    <div className="d-flex justify-content-between">
      {productos.map(({ Producto, ProductoID, Marca, Precio }) => (
        <Card>
          <p>{ProductoID}</p>
          <h1>{Producto}</h1>
          <p>{Marca}</p>
          <h1>{`$ ${Precio}`}</h1>
        </Card>
      ))}
      ;
    </div>
  );
};

export default ItemListContainer;
