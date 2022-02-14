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
    addItem,
    setIsLoading,
    setIsSuccess,
    setIsError,
  } = useProductsContext();

  let [color, setColor] = useState("#593196");

  useEffect(() => {
    const makeRequest = async () => {
      const Items = [];
      setIsLoading(true);
      try {
        if (id != "0") {
          const data = await getDocs(collection(db, "products"));
          data.forEach((item) => {
            item.data().categories.map((category) => {
              if (category.id == id) {
                Items.push(item.data());
              }
            });
          });
          setIsLoading(false);
          addItem(Items);
          setIsSuccess(true);
        } else {
          const data = await getDocs(collection(db, "products"));
          data.forEach((item) => {
            Items.push(item.data());
            setIsSuccess(true);
          });

          addItem(Items);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    makeRequest();
  }, [id]);

  // useEffect(() => {
  //   if (id != "0") {
  //     // alert("he pasado por id != 0");
  //     // alert(typeof id);
  //     console.log(id > 0);
  //     console.log(id);
  //     filterForCategory(id);
  //     console.log(productsCategories);
  //   }
  // }, []);

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
      return (
        <>
          <ItemList id={id} />
        </>
      );
    }
    return <></>;
  };

  return <>{renderResult()}</>;
};

export default ItemListContainer;
