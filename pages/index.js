import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import ItemListContainer from "../components/ui/ItemListContainer";

const index = () => {
  return (
    <Layout>
      <ItemListContainer id={0} />
    </Layout>
  );
};

export default index;
