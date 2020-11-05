export function removeProductFromCart(userId, productId) {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: { userId, productId },
  };
}

export function changeProductAmountInCart(userId, productId, amount) {
  return {
    type: "CHANGE_PRODUCTAMOUNT_IN_CART",
    payload: { userId, productId, amount },
  };
}

export function emptyCart(userId) {
  return {
    type: "EMPTY_CART",
    payload: { userId },
  };
}
