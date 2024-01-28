import React from "react";
import { MdDelete } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../reducers/cart.reducer";
import { Link } from "react-router-dom";
import emptyCartSvg from "../img/empty-cart.svg";

const Cart = () => {
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
  const subTotalPrice = cartItems.reduce((accumulator, currentItem) => {
    console.log(accumulator, currentItem.price, currentItem.qty);
    return accumulator + currentItem.price * currentItem.qty;
  }, 0);

  const gst = Math.round(subTotalPrice * 0.18);
  const totalPrice = subTotalPrice + gst;
  return (
    <>
      <div className="px-8 py-4 w-full">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>

        {cartItems?.length === 0 ? (
          <>
            <div className="flex flex-col items-center w-full ">
              <img
                src={emptyCartSvg}
                alt="empty_cart_image"
                className="w-52 mt-24"
              />
              <p className="text-lg font-semibold mt-4 ">Empty Cart!</p>
              <span className="text-neutral-500">No items in the cart</span>
              <Link to="/">
                <button className="text-sm underline">Back to Home</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex gap-16">
            <ul className="mt-2">
              {cartItems.map((product, index) => (
                <li key={index} className="flex my-8 first:mt-4">
                  <img
                    src={product.imageUrl}
                    alt="product_image"
                    className="w-44"
                  />
                  <div className="flex flex-col ml-6">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-neutral-400 text-sm">
                      {product.description}
                    </span>
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
                      <span className="text-sm font-medium">{product.qty}</span>
                      <button
                        onClick={() => handleIncreaseQty(product)}
                        className="bg-neutral-200 inline-flex items-center justify-center rounded-r"
                      >
                        <span className="material-symbols-outlined text-sm px-1">
                          <IoCart />
                        </span>
                      </button>
                    </div>
                    <span className="text-xl font-bold">₹ {product.price}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="ml-4 self-start text-sm"
                  >
                    <MdDelete />
                  </button>
                </li>
              ))}
            </ul>
            <div className="bg-neutral-100  h-fit px-8 py-6 border border-neutral-400 rounded-sm">
              <h4 className="text-xl font-semibold pb-2">Summary</h4>
              <div className="grid grid-cols-2">
                <div className="w-48">Subtotal</div>
                <div>₹ {subTotalPrice}</div>
                <div>GST(18%)</div>
                <div>₹ {gst}</div>
                <div className="font-semibold">Order Total</div>
                <div className="font-bold">₹ {totalPrice} </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {cartItems?.length > 0 ? (
        <div className="flex justify-evenly bg-indigo-50 w-[calc(100vw-232px)] h-24 fixed bottom-0 right-0 px-12 py-8">
          <div>
            <span className="text-xl font-semibold">
              Order Total :
              <span className="text-2xl font-bold"> ₹ {totalPrice}</span>
            </span>
          </div>
          <div>
            <Link to="/buy">
              <button className="px-4 py-2 bg-indigo-500 text-white font-semibold text-xl rounded">
                <IoCart />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
