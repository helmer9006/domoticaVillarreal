import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import db from "../../firebase/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useProductsContext } from "../../context/ProductsContext";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const ItemListContainer = ({ id }) => {
  const {
    products,
    isLoading,
    isSuccess,
    isError,
    setProducts,
    addItem,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useProductsContext();

  let [color, setColor] = useState("#593196");

  useEffect(() => {
    const makeRequest = async () => {
      console.log(id);
      setIsLoading(true);
      try {
        const Items =
          id != 0
            ? query(
                collection(db, "products"),
                where("categories.id", "==", id)
              )
            : collection(db, "products");
        const data = await getDocs(Items);
        // const data = await getDocs(collection(db, "products"));
        data.forEach((item) => {
          //añadimos productos de firebase a state products
          addItem(item.data());
          setIsLoading(false);
          setIsSuccess(true);
        });
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };

    makeRequest();
  }, [id]);

  const renderResult = () => {
    if (isLoading) {
      return (
        <ClipLoader
          color={color}
          loading={isLoading}
          css={override}
          size={100}
        />
      );
    }
    if (isError) {
      return <div className="search-message">Algo salió mal</div>;
    }
    if (isSuccess) {
      if (products) {
        return (
          <>
            <ItemList />
          </>
        );
      }
    }
    return <></>;
  };

  return <>{renderResult()}</>;
};

export default ItemListContainer;
