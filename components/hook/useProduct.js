import { useQuery } from "react-query";

const fetchProduct = async (id) => {
  const url_API_woo = "https://www.seitel.com.co/";
  const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
  const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";
  const endpoint = `https://www.seitel.com.co/wp-json/wc/v3/products/${id}?consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Error recuperando los productos.");
  }
  return response.json();
};

const useProduct = (id) => {
  return useQuery(["PRODUCT", id], () => fetchProduct(id), {
    staleTime: 5000, //Infinity para que quedpe cacheado por siempre
    notifyOnChangePropsExclusions: ["isStale"], //para no tener un segundo render del componente porque query notifica cuando la cache cumplió el tiempo cacheable
    cacheTime: 0,
  });
};

export default useProduct;
