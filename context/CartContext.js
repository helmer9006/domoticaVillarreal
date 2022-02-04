import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";

//Context
export const CartContext = createContext(null);

//Provider
export const CartContextProvider = ({ children }) => {
  const [productsCart, setProductsCart] = useState([]);
  const [total, setTotal] = useState(0);

  //Add product to the cart
  const addItem = (product) => {
    setProductsCart((prevProduct) => {
      return prevProduct.concat(product);
    });
  };

  useEffect(() => {
    let valorTotal = productsCart
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(valorTotal);
  }, [productsCart]);

  //Remove product to the cart
  const RemoveItem = (productId) => {
    setProductsCart((productsCart) => {
      return productsCart.filter((e) => e.id !== productId);
    });
  };

  //clear cart
  const Clear = () => {
    setProductsCart([]);
  };

  const isInCart = (productId) => {
    return productsCart.some((e) => e.id === productId);
  };

  const CounterItemCart = () => {
    return productsCart.length;
  };
  const values = useMemo(
    // States y funciones que serán visibles en el contexto.
    () => ({
      productsCart,
      setProductsCart,
      addItem,
      RemoveItem,
      Clear,
      isInCart,
      CounterItemCart,
      total,
    }),
    [productsCart]
  );

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

//
export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useCartContext;
