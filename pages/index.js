import Layout from "../components/layout/Layout";
import ItemListContainer from "../components/ui/ItemListContainer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //propiedad para determinar la cantidad de reintentos al no obtener respuesta del api antes de dar error
      refetchOnWindowFocus: true, //propiedad para lanzar neuvamente el llamado al api al cambiar de pestaña y volver
    },
  },
});

const index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Layout />
        <div className="container py-3">
          <ItemListContainer />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default index;
