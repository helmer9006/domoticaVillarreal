import Layout from "../components/layout/Layout";
import Head from "next/head";
import ItemListContainer from "../components/ui/ItemListContainer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <title>Domotica Villarreal </title>
        </Head>
        <Layout />
        <div  className="container py-3">
          <ItemListContainer />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default index;
