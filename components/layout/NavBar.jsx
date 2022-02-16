import React, { useEffect, useState } from "react";
import Link from "next/link";
import CartWidget from "../ui/CartWidget";
import DropdownCategories from "../ui/dropdownCategories";
import { useCartContext } from "../../context/CartContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../../firebase/firebase";

const NavBar = () => {
  //state
  const { addItem } = useCartContext();

  //                                                                                                                                                                                                    state local
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    e.preventDefault();
    const productRef = collection(db, "products");
    const q = query(productRef, where("name", "==", `${search}`));
    const querySnapshot = await getDocs(q);
    console.log(search);
    console.log(q);
    querySnapshot.forEach((doc) => {
      alert("d");
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      addItem(doc.data());
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-10% bg-light">
      <div className="container">
        <Link href="/">
          <img
            className="navbar-brand"
            src="/domotica.ico"
            weight="50px"
            height="50px"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex m-auto" style={{ width: "65%" }}>
            <input
              className="form-control  me-2"
              type="buscar"
              placeholder="Buscar"
              aria-label="Buscar"
              name="search"
              onChange={handleChange}
            />
            <Link href="/">
              <DropdownCategories />
            </Link>
            <button
              className="btn btn-outline-primary d-flex py-1"
              type="submit"
              onClick={onClick}
            >
              <span className="material-icons m-auto ">search</span>
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 mx-4">
            <li
              className="nav-item bg-primary"
              style={{ borderRadius: "50px" }}
            >
              <Link href="/offers">
                <a className="nav-link" style={{ color: "#fff" }}>
                  Sale
                </a>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/account">
                <a className="nav-link">Account</a>

                {/* <span style={{ cursor: "pointer" }} class="material-icons">
                  person_pin
                </span> */}
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
