import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useProducts from "./../hook/useProducts";
import { useQuery } from "react-query";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const ItemListContainer = ({ id }) => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#593196");
  const [products, setProducts] = useState();
  const endpoint = `https://www.seitel.com.co/wp-json/wc/v3/products?category=${id}&consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;
  const productos = useProducts();

  const fetchProductxCategories = async () => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      s;
      throw new Error("Error recuperando los productos.");
    }
    return response.json();
  };

  const productsxCategories = useQuery(
    "PRODUCTSXCATEGORIES",
    fetchProductxCategories,
    {
      staleTime: 5000,
      cacheTime: 0,
    }
  );

  console.log(id);
  return (
    <>
      {id != 0 ? (
        productsxCategories.data ? (
          <ItemList query={productsxCategories} />
        ) : (
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={100}
          />
        )
      ) : productos.isLoading || productos.isError ? (
        <ClipLoader color={color} loading={loading} css={override} size={100} />
      ) : (
        <ItemList query={productos} />
      )}
      {}

      {/* {productos.isLoading && (
        <ClipLoader color={color} loading={loading} css={override} size={100} />
      )}
      <ItemList query={productos} /> */}
    </>
  );
};

export default ItemListContainer;
