import React, { useState } from "react";
import { useCartContext } from "./../context/CartContext";
import Layout from "../components/layout/Layout";
import db from "./../firebase/firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const checkout = () => {
  const { productsCart, total } = useCartContext();
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, phone, email } = client;

  const order = {
    buyer: {
      name: name,
      phone: phone,
      email: email,
    },
    items: productsCart,
    total: total,
  };

  const handleChange = (e) => {
    setClient({
      ...client,
      [event.target.name]: event.target.value,
    });
  };

  const onClick = async (e) => {
    e.preventDefault();
    if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
      swal("Sorry!", "I have ocurred error!", "error");
    } else {
      const { id } = await addDoc(collection(db, "orders"), order);
      swal({
        title: `Thanks for your purchase!, Orden ${id}`,
        text: "We are waiting for you here soon!",
        icon: "success",
        button: "Bye!",
      });
    }
  };

  return (
    <Layout>
      <h1 className="my-4">Checkout</h1>
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            name="name"
            // value="name"
            type="text"
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            name="email"
            // value="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            onChange={handleChange}
            name="phone"
            // value="phone"
            type="number"
            className="form-control"
            id="phone"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={onClick}>
          Finish buying
        </button>
      </form>
    </Layout>
  );
};

export default checkout;
