import { collection, query, where, getDocs } from "firebase/firestore";
const useProduct = async (id) => {
  const [product, setProduct] = useState({});

  const productRef = collection(db, "products");
  const q = query(productRef, where("id", "==", `${id}`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    setProduct(doc.data());
  });
  return product;
};

export default useProduct;
