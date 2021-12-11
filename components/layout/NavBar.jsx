import React from "react";
import Link from "next/link";

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
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mx-4">
            <li className="nav-item">
              <Link href="/offers">
                <a className="nav-link">Ofertas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/account">
                <a className="nav-link">Cuenta</a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control  me-2"
              type="buscar"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button className="btn btn-outline-success" type="submit">
              <img
                src="baseline_search_black_24dp.png"
                className="img-fluid"
                alt="icono buscar"
              />
            </button>
          </form>
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
