import Layout from "../components/layout/Layout";
import Head from "next/head";
import ItemListContainer from "../components/ui/ItemListContainer";
import Item from "../components/ui/Item";
const index = () => {

  return (
    <div>
      <Head>
        <title>Domotica Villarreal </title>
      </Head>
      <Layout />
      <div className="container" style={{ background: "#E3E3D8", padding: "5%" }}>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default index;
