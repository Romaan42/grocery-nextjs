export const getCartItems = async () => {
  const res = await fetch("http://localhost:3000/api/cart-items");
  const data = await res.json();
  return data;
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  return data;
};
