import React, { useEffect, useState } from "react";
// import useCategories from "../hook/useCategories";
import Link from "next/link";

const DropdownCategories = () => {
  // const query = useCategories();

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categorías
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link href="/category/[id]" as={`/category/111`}>
              <a className="dropdown-item" value="111">
                Cctv
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/[id]" as={`/category/119`}>
              <a className="dropdown-item" value="119">
                Accesorios
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/[id]" as={`/category/117`}>
              <a className="dropdown-item" value="117">
                Alarmas y detección de Incendio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/category/[id]" as={`/category/114`}>
              <a className="dropdown-item" value="114,">
                Control de Acceso
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownCategories;
