import Layout from "../components/layout/Layout";
import Head from "next/head";
import ItemListContainer from "../components/ui/ItemListContainer";
const index = () => {
  const productos = [
    {
      Producto: "Azúcar Blanca",
      ProductoID: 1959,
      Marca: "Riopaila",
      Tamaño: 1000.0,
      Unidad: "g",
      Complemento: null,
      RutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      CódigoEAN13: null,
      Precio: 2300.0,
    },
    {
      Producto: "Azúcar Blanca",
      ProductoID: 1959,
      Marca: "Riopaila",
      Tamaño: 1000.0,
      Unidad: "g",
      Complemento: null,
      RutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      CódigoEAN13: null,
      Precio: 2300.0,
    },    {
      Producto: "Azúcar Blanca",
      ProductoID: 1959,
      Marca: "Riopaila",
      Tamaño: 1000.0,
      Unidad: "g",
      Complemento: null,
      RutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      CódigoEAN13: null,
      Precio: 2300.0,
    },    {
      Producto: "Azúcar Blanca",
      ProductoID: 1959,
      Marca: "Riopaila",
      Tamaño: 1000.0,
      Unidad: "g",
      Complemento: null,
      RutaImagen:
        "https://vixark.b-cdn.net/lp-i-i-g/azúcar-blanca-riopaila-1000g.jpg",
      CódigoEAN13: null,
      Precio: 2300.0,
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Domotica Villarreal </title>
      </Head>
      <Layout />
      <div style={{ background: "#E3E3D8", padding: "5%" }}>
        <ItemListContainer productos={productos} />
      </div>
    </div>
  );
};

export default index;
