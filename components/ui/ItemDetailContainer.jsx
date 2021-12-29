import React, { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useQuery } from "react-query";

const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";

const ItemDetailContainer = ({ id }) => {
  const endpoint = `https://www.seitel.com.co/wp-json/wc/v3/products/${id}?consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;

  const fetchProduct = async () => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Error recuperando los productos.");
    }
    return response.json();
  };

  const query = useQuery("PRODUCT", fetchProduct, {
    staleTime: 5000,
  });
  return (
    <div>
      {query.isError ? <p>Error al consultar el producto</p> : null}
      {query.isLoading && "Consultando producto..."}
      {query.data ? <ItemDetail product={query.data} /> : "cargando..."}
    </div>
  );
};

export default ItemDetailContainer;