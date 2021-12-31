import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import ItemListContainer from "../../components/ui/ItemListContainer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //propiedad para determinar la cantidad de reintentos al no obtener respuesta del api antes de dar error
      refetchOnWindowFocus: true, //propiedad para lanzar neuvamente el llamado al api al cambiar de pestaña y volver
    },
  },
});

const product = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <QueryClientProvider client={queryClient}>
      <Layout> {id ? <ItemListContainer id={id} /> : null}</Layout>
    </QueryClientProvider>
  );
};

export default product;
