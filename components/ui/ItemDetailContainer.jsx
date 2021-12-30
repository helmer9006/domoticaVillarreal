import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useQuery } from "react-query";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";

const ItemDetailContainer = ({ id }) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#593196");
  const endpoint = `https://www.seitel.com.co/wp-json/wc/v3/products/${id}?consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;

  const fetchProduct = async () => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      s;
      throw new Error("Error recuperando los productos.");
    }
    return response.json();
  };

  const {data} = useQuery("PRODUCT", fetchProduct, {
    staleTime: 5000,
    cacheTime: 0,
  });

  return (
    <>
      {data ? (
        <ItemDetail  product={data} />
      ) : (
        <ClipLoader color={color} loading={loading} css={override} size={100} />
      )}
    </>
  );
};

export default ItemDetailContainer;
