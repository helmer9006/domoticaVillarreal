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
  const [categoryID, setCategoryID] = useState(0);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#593196");
  const products = useProducts(id);
  const { isError, isLoading, isSuccess } = products;

  const renderResult = () => {
    if (isLoading) {
      return (
        <ClipLoader color={color} loading={loading} css={override} size={100} />
      );
    }
    if (isError) {
      return <div className="search-message">Something went wrong</div>;
    }
    if (isSuccess) {
      if (products.data) {
        return <ItemList query={products} />;
      }
    }
    return <></>;
  };

  return <>{renderResult()}</>;
};

export default ItemListContainer;
