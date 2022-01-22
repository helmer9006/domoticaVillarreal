import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
const ItemDetail = ({ product }) => {
  //state
  const { addItem, isInCart } = useCartContext();

  const {
    id,
    name,
    short_description,
    stock_quantity,
    sku,
    price,
    regular_price,
    images,
    categories,
  } = product;

  //#region  STATE
  const [added, setAdded] = useState(false);
  const [quantityAdd, setQuantityAdd] = useState(null);
  const onAdd = () => {
    setAdded(true);
  };

  useEffect(() => {
    if (added) {
      if (!isInCart(id)) {
        addItem({
          id: id,
          name: name,
          price: price,
          quantity: quantityAdd,
        });
      } else {
        swal("Oops!", "The product is already added to the cart!", "error");
        return;
      }
    }
  }, [added]);

  //#endregion
  const initial = stock_quantity > 0 ? 1 : 0;
  const stock =
    stock_quantity > 0 ? (
      <h4 style={{ color: "green", margin: "50px 0" }}>
        Stock disponible: {stock_quantity}
      </h4>
    ) : (
      <h5 style={{ color: "red" }}>No disponible</h5>
    );

  const categorias = categories.map((item) => (
    <span key={item.id} className="">
      {item.name},
    </span>
  ));
  //  let  newWord = originalWord.replace(/<d>/g, "");
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <img src={images[0].src} alt="" />
      </div>
      <div className="col-md-6">
        {categorias}
        <h3 className="mt-2">{name}</h3>
        {stock}
        <h5 className="mt-4">
          {short_description.substring(3, short_description.length - 5)}
        </h5>
        <h1 className="mt-4">
          $ {new Intl.NumberFormat("es-CO").format(regular_price)}
        </h1>
        <div className="my-5">
          {added ? (
            <>
              <Link href="/cart">
                <button
                  // onClick={}
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go cart
                </button>
              </Link>
              <Link href="/">
                <button
                  // onClick={}
                  className="btn btn-primary btn-lg btn-block"
                >
                  Continue Shopping
                </button>
              </Link>
            </>
          ) : (
            <ItemCount
              stock_quantity={stock_quantity}
              initial={initial}
              onAdd={onAdd}
              setQuantityAdd={setQuantityAdd}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
