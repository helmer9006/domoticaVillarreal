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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  //Add product funciones a state
  const addItem = (product) => {
    setProducts((prevProduct) => {
      return prevProduct.concat(product);
    });
  };

  const values = useMemo(
    // States y funciones que serán visibles en el contexto.
    () => ({
      products,
      isLoading,
      isSuccess,
      isError,
      setProducts,
      addItem,
      setIsLoading,
      setIsSuccess,
      setIsError,
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
