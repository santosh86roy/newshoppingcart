import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cart.reducer";
import { MdDelete } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = location.state.product;
  console.log(product);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const isAlreadyInTheCart = cartItems.some((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    if (!isAlreadyInTheCart) {
      dispatch(addToCart(product));
      toast.success("Product successfully added to Cart!");
    } else {
      toast.error("This product has already been placed to the Cart!");
    }
  };

  const handleRemoveFromCart = (productId) => {
    if (isAlreadyInTheCart) {
      dispatch(removeFromCart(productId));
      toast.success("Product has been removed from the cart");
    } else {
      toast.error("This product is not available in the cart");
    }
  };

  const handleBuyNow = (product) => {
    navigate("/buy");
  };

  return (
    <>
      <div className="md:px-12 px-1 md:py-6 py-1">
        <div className="f md:flex flex-col items-center">
          <img
            src={product.imageUrl}
            alt="product_image"
            className="w-96 mt-4"
          />
          <div className="flex flex-col ml-8 md:mt-0 mt-2">
            <span className="md:text-2xl text-xl  font-semibold">
              {product?.name}
            </span>
            <span className="text-neutral-500">{product?.description}</span>
            <div className="buttons flex justify-between items-center">
              <span className="md:text-4xl text-2xl font-bold">
                ₹ {product?.price}
              </span>
              <div className="flex flex-col">
                {!cartItems.some((item) => item.id === product.id) ? (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-fit mt-0"
                  >
                    <IoCart />
                  </button>
                ) : (
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="w-fit mt-0"
                  >
                    <MdDelete />
                  </button>
                )}
              </div>
            </div>
            <button
              onClick={() => handleBuyNow(product)}
              className="bg-indigo-500 text-white w-fit mt-4 px-6 py-2 text-xl font-semibold rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
