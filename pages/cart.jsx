import React from "react";
import Layout from "../components/layout/Layout";
import { useCartContext } from "../context/CartContext";
import Head from "next/head";
const cart = () => {
  //state
  const { productsCart, RemoveItem, Clear } = useCartContext();

  const RemoveItemProduct = (id) => {
    swal({
      title: "Are you sure you want to remove this product??",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        RemoveItem(id);
        swal("Perfect! Your product has been deleted of the cart!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });
  };
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Layout>
        <div className="container">
          <table className="table my-5 bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">PRODUCT</th>
                <th scope="col">QUANTITY</th>
                <th scope="col">UNIT PRICE</th>
                <th scope="col">TOTAL PRICE</th>
                <th scope="col">OPERATION</th>
              </tr>
            </thead>
            <tbody>
              {productsCart.map(({ id, name, quantity, price }, index) => (
                <tr key={id}>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{price * quantity}</td>
                  <td>
                    <button
                      onClick={() => {
                        RemoveItemProduct(id);
                      }}
                      className="btn-primary"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <th>TOTAL PURCHASE</th>
                <th>$ 5000000</th>
                <td>
                  <button
                    onClick={() => {
                      Clear();
                    }}
                    className="btn-secondary"
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {JSON.stringify()}
        </div>
      </Layout>
    </>
  );
};

export default cart;
