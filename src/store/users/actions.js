export function removeProductFromCart(userId, productId) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: { userId, productId },
  };
}

export function addProductToCart(userId, productId, amount) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: { userId, productId, amount },
  };
}

export function emptyCart(userId) {
  return {
    type: "EMPTY_CART",
    payload: { userId },
  };
}
