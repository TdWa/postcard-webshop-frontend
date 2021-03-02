export const selectCartByUserId = (userId) => (state) =>
  state.users.find((user) => user.id === userId)?.cart;

export const selectProductInCart = (userId, productId) => (state) => {
  const cart = state.users.find((user) => user.id === userId)?.cart;
  const product = cart.find((p) => p.productId === productId);
  return product;
};
