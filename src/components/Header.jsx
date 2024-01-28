import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { IoCart } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../reducers/cart.reducer";

export default function Header() {
  // const cartItems = useSelector((state) => state.cartItems || []);
  const cartItemsLength = useSelector((state) => state.cart.cartItems.length);
  // const cartItemsLength = cartItems.length || 0

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecreaseQty = (product) => {
    dispatch(decreaseQty(product));
  };

  const handleIncreaseQty = (product) => {
    dispatch(increaseQty(product));
  };

  console.log(cartItems);
  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    console.log(accumulator, currentItem.price, currentItem.qty);
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);

  return (
    <header className="bg-violet-500 text-white sticky top-0 flex justify-between items-center w-full h-12 px-6 ">
      <Link to="/">
        <span className="flex justify-center items-center text-2xl font-bold ">
          🛒 EKart
        </span>
      </Link>
      {/* <Link to="/cart">My Cart ({cartItemsLength})</Link> */}
      <Popup
        trigger={
          <button className="flex items-center gap-2">
            {" "}
            <IoCart /> ({cartItemsLength})
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="fixed top-0 right-0 m-4 mt-12 bg-white border border-neutral-300 max-h-96 overflow-y-auto z-50">
            {cartItems?.length === 0 ? (
              <>
                <div className="flex flex-col items-center w-full mt-4">
                  <p className="text-lg font-semibold mt-4 ">Empty Cart!</p>
                  <span className="text-neutral-500">No items in the cart</span>
                </div>
              </>
            ) : (
              <ul className="mt-2">
                <div className="flex justify-center">
                  <Link to="/cart">
                    <button onClick={close} className="underline">
                      View Cart
                    </button>
                  </Link>
                </div>
                {cartItems.map((product, index) => (
                  <li
                    key={index}
                    className="flex md:my-8 my-0 justify-between first:mt-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt="product_image"
                      className="w-24 object-contain"
                    />
                    <div className="flex flex-col ml-6">
                      <span className="text-sm font-medium">
                        {product.name}
                      </span>
                      {/* <span className="text-neutral-400 text-sm">
                    {product.description}
                  </span> */}
                      <div className="flex w-fit items-center gap-2 my-2 border border-neutral-300 rounded">
                        <button
                          disabled={product.qty <= 1}
                          onClick={() => handleDecreaseQty(product)}
                          className="bg-neutral-200 inline-flex items-center justify-center disabled:opacity-75 rounded-l"
                        >
                          <span className="material-symbols-outlined text-sm px-1">
                            <MdDelete />
                          </span>
                        </button>
                        <span className="text-sm font-medium">
                          {product.qty}
                        </span>
                        <button
                          onClick={() => handleIncreaseQty(product)}
                          className="bg-neutral-200 inline-flex items-center justify-center rounded-r"
                        >
                          <span className="material-symbols-outlined text-sm px-1">
                            add
                          </span>
                        </button>
                      </div>
                      <span className="text-xl font-bold">
                        ₹ {product.price}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="ml-4 self-start text-xs"
                    >
                      <MdDelete />
                    </button>
                  </li>
                ))}
                <div className="flex flex-col items-center font-medium">
                  <div>
                    Order Total :{" "}
                    <span className="text-2xl font-bold">₹ {totalPrice}</span>
                  </div>
                  <Link to="/buy">
                    <button
                      className="bg-indigo-500 text-white my-4 py-1 px-8 font-semibold text-lg rounded"
                      onClick={close}
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </ul>
            )}
          </div>
        )}
      </Popup>
    </header>
  );
}
