import React from "react";
import ItemDetailContainer from "../../components/ui/ItemDetailContainer";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

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
      <Layout>
        <ItemDetailContainer id={id} />
      </Layout>
    </QueryClientProvider>
  );
};

export default product;
