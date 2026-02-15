import cartSlice from "./cartSlice";
import loginSlice from "./checkLoginSlice";
import searchProductSlice from "./serchProductSlice";

const { configureStore } = require("@reduxjs/toolkit");

let store;

const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice.reducer,
      user: loginSlice.reducer,
      products: searchProductSlice.reducer,
    },
  });
};

export const getStore = () => {
  if (!store) {
    store = makeStore();
  }

  return store;
};
