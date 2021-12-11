import React from "react";
import Link from "next/link";
import CartWidget from "../ui/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-10% bg-light">
      <div className="container">
        <Link href="/">
          <img
            className="navbar-brand"
            src="domotica.ico"
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
            />
            <button className="btn btn-outline-success d-flex" type="submit">
              <span className="material-icons m-auto ">search</span>
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0 mx-4">
            <li
              className="nav-item "
              style={{ background: "#06920f", borderRadius: "50px" }}
            >
              <Link href="/offers">
                <a className="nav-link" style={{ color: "#fff" }}>
                  Ofertas
                </a>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link href="/account">
                <a className="nav-link">Cuenta</a>

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
{
  /* 
<ul>
      <li>
        <Link href="/">Inicio</Link>
        <Link href="/cuenta">Cuenta</Link>
      </li>
    </ul> */
}
