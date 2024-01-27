import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cart.reducer";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAlreadyInTheCart = cartItems.some((item) => item.id === product.id)

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
    navigate("/product-details", { state: { product: product } });
  };
  return (
    <>
      <div className="border border-neutral-300 rounded h-fit p-4">
        <div className="flex flex-col p-2">
          <img
            src={product.imageUrl}
            className="w-72 h-36 object-contain"
            alt="product_image"
          />
          <span className="font-semibold mt-4">{product.name}</span>
          <p className="text-neutral-400 text-sm">{product.description}</p>
          <div className="flex justify-between">
            <span className="text-lg font-bold">₹ {product.price}</span>

            {!cartItems.some((item) => item.id === product.id) ? (
              <>
                {console.log(cartItems.some((item) => item.id === product.id))}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-sm"
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <>
                {console.log(cartItems.some((item) => item.id === product.id))}
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-sm"
                >
                  Remove from Cart
                </button>
              </>
            )}
          </div>

          <button
            className="bg-indigo-500 text-white w-full mt-4 px-2 py-1 text-center font-semibold rounded"
            onClick={() => handleBuyNow(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
