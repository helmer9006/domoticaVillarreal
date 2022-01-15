import React from "react";
import Layout from "../components/layout/Layout";
import { useCartContext } from "../context/CartContext";
import Head from "next/head";
import Link from "next/link";
const cart = () => {
  //state
  const { productsCart, RemoveItem, Clear } = useCartContext();

  let valorTotal = productsCart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

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

  const ResetItemsCart = (id) => {
    swal({
      title: "Are you sure you want to remove all product of the cart?",
      text: "Once eliminated, you will not be able to recover all product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Clear();
        swal("Perfect! Your cart has been clear!", {
          icon: "success",
        });
      } else {
        swal("Your products is safe!");
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
          {productsCart.length > 0 ? (
            <>
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
                    <th>{valorTotal}</th>
                    <td>
                      <button
                        onClick={() => {
                          ResetItemsCart();
                        }}
                        className="btn-secondary"
                      >
                        Reset
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="col text-center">
                <Link href="/">
                  <button className="align-items-center bg-primary text-white p-2">
                    Continue Shopping
                  </button>
                </Link>
                <Link href="#">
                  <button className="align-items-center bg-primary text-white p-2">
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-center my-4">
                There are no products loaded in the cart
              </h3>
              <div className="col text-center">
                <Link href="/">
                  <button className="align-items-center bg-primary text-white p-2">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default cart;
