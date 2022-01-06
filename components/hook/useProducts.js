import { useQuery } from "react-query";

const fetchProducts = async(id) => {
    const url_API_woo = "https://www.seitel.com.co/";
    const ck_API_woo = "ck_d5910d8a72b7c26d335ae52c2688691848004b6c";
    const cs_API_woo = "cs_5a07ef9d12b0ca86ba20c239c3d93eff6798732c";
    let endpoint1 = `https://www.seitel.com.co/wp-json/wc/v3/products?per_page=20&consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;
    let endpoint2 = `https://www.seitel.com.co/wp-json/wc/v3/products?category=${id}&per_page=20&consumer_key=${ck_API_woo}&consumer_secret=${cs_API_woo}`;
    if (id === "0") {
        const response = await fetch(endpoint1);
        if (!response.ok) {
            throw new Error("Error recuperando los productos.");
        }
        return response.json();
    } else {
        const response = await fetch(endpoint2);
        if (!response.ok) {
            throw new Error("Error recuperando los productos.");
        }
        return response.json();
    }
};

const useProducts = (id) => {
    return useQuery(["PRODUCTS", id], () => fetchProducts(id), {
        staleTime: 5000, //Infinity para que quedpe cacheado por siempre
        notifyOnChangePropsExclusions: ["isStale"], //para no tener un segundo render del componente porque query notifica cuando la cache cumplió el tiempo cacheable
        cacheTime: 0,
    });
};

export default useProducts;