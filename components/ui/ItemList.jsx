import React from "react";
// import styled from "styled-components";
import useRequest from "../hook/useRequest";
import Item from "./Item";
const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";
const endpoint = `https://www.seitel.com.co/wp-json/wc/v3/products?consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;

const ItemList = () => {
  const productos = [
    {
      codigo: 1,
      producto: "Azúcar Blanca",
      productoID: 1959,
      marca: "Riopaila",
      tamaño: 1000.0,
      unidad: "g",
      complemento: null,
      rutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      cóoigoEAN13: null,
      precio: 2300.0,
    },
    {
      codigo: 2,
      producto: "Azúcar Blanca",
      productoID: 1959,
      marca: "Riopaila",
      tamaño: 1000.0,
      unidad: "g",
      complemento: null,
      rutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      codigoEAN13: null,
      precio: 2300.0,
    },
    {
      codigo: 3,
      producto: "Azúcar Blanca",
      productoID: 1959,
      marca: "Riopaila",
      tamaño: 1000.0,
      unidad: "g",
      complemento: null,
      rutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      codigoEAN13: null,
      precio: 2300.0,
    },
    {
      codigo: 4,
      producto: "Azúcar Blanca",
      productoID: 1959,
      marca: "Riopaila",
      tamaño: 1000.0,
      unidad: "g",
      complemento: null,
      rutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      codigoEAN13: null,
      precio: 2300.0,
    },
  ];

  const { data, loading, error } = useRequest({ endpoint });
  console.log(data);
  //   const Card = styled.div`
  //     width: 240px;
  //     height: 300px;
  //     background: #fff;
  //     color: #333;
  //     border-radius: "25px";
  //     box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  //     transition: 0.3s;
  //     margin: 1.5rem;
  //     padding: 1.5rem;

  //     :hover {
  //       box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.4);
  //       transform: scale(1.05, 1.05);
  //     }
  //   `;

  return (
    <div className="d-flex justify-content-between">
      {loading && <p>Cargando...</p>}
      {!loading && error && <p>Error loading Posts: {error}</p>}
      {!loading &&
        data &&
        productos.map((item) => {
          <Item key={item.id} data={item} />;
        })}

      <Item data={productos} />
    </div>
  );
};

export default ItemList;
