import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";

//Context
export const ProductsContext = createContext([]);

//Provider
export const productsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //Add products al state
  const addProducts = (product) => {
    setProducts((prevProduct) => {
      return prevProduct.concat(product);
    });
  };

  const values = useMemo(
    // States y funciones que serán visibles en el contexto.
    () => ({
      products,
      setProducts,
      addProducts,
    }),
    [products]
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
