import React from "react";
import { useCartContext } from "../../context/CartContext";
import Link from "next/link";
const CartWidget = () => {
  const { CounterItemCart } = useCartContext();
  return (
    <div style={{ position: "relative" }}>
      <Link href="/cart">
        <i
          className="material-icons md-48"
          data-toggle="carrito"
          data-placement="carrito"
          title="carrito"
          style={{ cursor: "pointer" }}
        >
          shopping_cart
        </i>
      </Link>

      <span style={{ position: "absolute", color: "red" }}>
        {CounterItemCart()}
      </span>
    </div>
  );
};

export default CartWidget;
