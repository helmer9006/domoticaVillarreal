import React, { useEffect } from "react";
import ItemDetailContainer from "../../components/ui/ItemDetailContainer";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";


const product = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
      <Layout> {id ? <ItemDetailContainer id={id} /> : null}</Layout>
  );
};

export default product;
