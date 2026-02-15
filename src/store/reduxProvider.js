"use client";
import { Provider } from "react-redux";
import { getStore } from "./store";

export default function ReduxProvider({ children }) {
  const store = getStore();

  return <Provider store={store}>{children}</Provider>;
}
