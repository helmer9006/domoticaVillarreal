import React, { useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id }) => {
  useEffect(() => {
    if (id) {
      //fetch
    }
  }, [id]);

  return (
    <div>
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
