export const selectCartByUserId = (userId) => (state) =>
  state.users.find((user) => user.id === userId)?.cart;
