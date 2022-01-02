import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import ItemListContainer from "../../components/ui/ItemListContainer";

const product = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return <Layout> {id ? <ItemListContainer id={id} /> : null}</Layout>;
};

export default product;
