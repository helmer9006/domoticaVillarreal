import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useProducts from "./../hook/useProducts";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import db from "../../firebase/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import ItemsMasVendidos from "./ItemsMasVendidos";
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
  const [productFirebase, setProductFirebase] = useState({
    data: [],
    isError: false,
  });
  const [loadingFirebase, setLoadingFirebase] = useState(false);
  const [isSuccessFirebase, setIsSuccessFirebase] = useState(false);
  const [isErrorFirebase, setIsErrorFirebasee] = useState(false);
  useEffect(() => {
    const makeReqeust = async () => {
      try {
        setLoadingFirebase(true);
        const data = await getDocs(collection(db, "products"));
        data.forEach((item) => {
          productFirebase.data.push(item.data());
        });
      } catch (error) {
        console.log(error);
        setIsErrorFirebasee(true);
      }
    };
    makeReqeust();
    setProductFirebase(productFirebase);
    setLoadingFirebase(false);
    setIsSuccessFirebase(true);
  }, []);

  const renderResult = () => {
    if (isLoading || loadingFirebase) {
      return (
        <ClipLoader
          color={color}
          loading={isLoading}
          css={override}
          size={100}
        />
      );
    }
    if (isError || isErrorFirebase) {
      return <div className="search-message">Algo salió mal</div>;
    }
    if (isSuccess || isSuccessFirebase) {
      if (products.data) {
        return (
          <>
            <ItemList query={products} />
            <h1 className="text-center my-5">Productos más Vendidos</h1>
            {productFirebase && <ItemList query={productFirebase} />}
          </>
        );
      }
    }
    return <></>;
  };

  return <>{renderResult()}</>;
};

export default ItemListContainer;
