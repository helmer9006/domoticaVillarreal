import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import db from "../../firebase/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useProductsContext } from "../../context/ProductsContext";
import { stringify } from "@firebase/util";

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

  // let itemList = id ? : products
  let [color, setColor] = useState("#593196");

  useEffect(() => {
    console.log(id);

    let filteredProducts = products.filter((product) => {
      var allow = false;
      for (const category of product.categories) {
        // console.log(temp);
        if (!allow) {
          allow = category.id !== id;
        }
      }
      return allow;
    });
    alert(stringify(filteredProducts));
  }, []);
  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const data = await getDocs(collection(db, "products"));
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
    if (products.length < 1) {
      makeRequest();
    }
  }, []);

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
