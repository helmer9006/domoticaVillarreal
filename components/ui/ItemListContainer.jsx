import React, {useState} from "react";
import ItemList from "./ItemList";
import useProducts from "./../hook/useProducts";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 25vh auto;
  border-color: "#593196";
`;
const ItemListContainer = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#593196");

  const query = useProducts();

  return (
    <>
    {query.isLoading &&  <ClipLoader color={color} loading={loading} css={override} size={100} />}
      <ItemList query={query} />
    </>
  );
};

export default ItemListContainer;
