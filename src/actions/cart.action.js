export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const updateCartLength = (length) => {
  return {
    type: "UPDATE_CART_LENGTH",
    payload: length,
  };
};
