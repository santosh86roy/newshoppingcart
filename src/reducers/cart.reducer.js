// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          qty: updatedCartItems[index].qty + 1,
        };
        state.cartItems = updatedCartItems;
      }
    },

    decreaseQty: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[index] = {
          ...updatedCartItems[index],
          qty: updatedCartItems[index].qty - 1,
        };
        state.cartItems = updatedCartItems;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;

// // cartReducer.js
// const initialState = {
//   cartItems: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((item) => item.id !== action.payload),
//       };

//     // case "UPDATE_CART_LENGTH":
//     //   return {
//     //     ...state,
//     //     cartLength: state.cartItems.length || 0,
//     //   };

//     default:
//       return state;
//   }
// };

// export default cartReducer;
