import Layout from "../components/layout/Layout";
import ItemListContainer from "../components/ui/ItemListContainer";

const index = () => {
  return (
    <>
      <Layout />
      <div className="container py-3">
        <ItemListContainer id="0" />
      </div>
    </>
  );
};

export default index;
