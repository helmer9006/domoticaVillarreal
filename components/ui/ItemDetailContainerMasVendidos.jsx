import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import useProduct from "../hook/useProduct";
import db from "../../firebase/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const url_API_woo = "https://www.seitel.com.co/";
const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";

const ItemDetailContainer = ({ id = null }) => {
  let [color, setColor] = useState("#593196");
  const product = useProduct(id);

  useEffect(() => {
    const producto = query(collection(db, "products"), where("id", "==", id));
    const result = getDocs(producto);
    console.log(result);
    // const data = await getDocs(collection(db, "products"), query("id" == id));
  }, []);

  return (
    <>
      {product.data ? (
        <ItemDetail product={product.data} />
      ) : (
        <ClipLoader
          color={color}
          loading={product.isLoading}
          css={override}
          size={100}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
