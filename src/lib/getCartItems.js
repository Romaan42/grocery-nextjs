export const getCartItems = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/cart-items`);
  const data = await res.json();
  return data;
};
