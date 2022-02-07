import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useQuery, QueryClient, QueryCache, MutationCache } from "react-query";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import useProduct from "../hook/useProduct";
import { useProductsContext } from "../../context/ProductsContext";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";

const ItemDetailContainer = ({ id }) => {
  const { products, isLoading, isSuccess, isError } = useProductsContext();
  const product = products.filter((item) => item.id == id);

  let [color, setColor] = useState("#593196");
  return (
    <>
      {product.length > 0 ? (
        <ItemDetail product={product[0]} />
      ) : (
        <p>No se ha encontrado</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
