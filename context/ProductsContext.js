import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";

//Context
export const ProductsContext = createContext(null);

//Provider
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsCategories, setProductsCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cat, setCat] = useState(null);
  //Add product funciones a state
  const addItem = (product) => {
    setProducts(product);
  };

  const filterForCategory = (IdCat) => {
    console.log(IdCat);
    let filteredProducts = products.filter((product) => {
      var allow = false;
      for (const category of product.categories) {
        if (!allow) {
          allow = category.id == IdCat;
        }
      }
      return allow;
    });
    setProductsCategories(filteredProducts);
    console.log(filteredProducts);
  };

  const values = useMemo(
    // States y funciones que serán visibles en el contexto.
    () => ({
      products,
      isLoading,
      isSuccess,
      isError,
      productsCategories,
      cat,
      setProducts,
      addItem,
      setIsLoading,
      setIsSuccess,
      setIsError,
      filterForCategory,
      setCat,
    }),
    [products, isLoading]
  );

  // Interface donde será expuesto como proveedor y envolverá la App.
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

//
export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useProductsContext;
