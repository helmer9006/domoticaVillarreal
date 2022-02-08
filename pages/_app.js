//archivo para guardar configuraciones
import React from "react";
import "../global.css";
import { CartContextProvider } from "../context/CartContext";
import { ProductsContextProvider } from "../context/ProductsContext";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}
