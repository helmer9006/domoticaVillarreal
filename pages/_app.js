//archivo para guardar configuraciones
import React from "react";
import "../global.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CartProvider from "../context/CartContext";
import { CartContextProvider } from "../context/CartContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, //propiedad para determinar la cantidad de reintentos al no obtener respuesta del api antes de dar error
      refetchOnWindowFocus: true, //propiedad para lanzar neuvamente el llamado al api al cambiar de pestaña y volver
    },
  },
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CartContextProvider>
  );
}
