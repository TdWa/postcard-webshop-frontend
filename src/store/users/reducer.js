const initialState = [
  {
    id: 1,
    name: "Tim",
    token: "qwerty",
    isAdmin: true,
    email: "tim@tim.com",
    password: "123encrypted",
    cart: [
      { productId: 1, amount: 5 },
      { productId: 2, amount: 1 },
      { productId: 32, amount: 10 },
    ],
  },
];

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_PRODUCT_TO_CART": {
      return state.map((user) => {
        if (user.id !== payload.userId) {
          // if it is not the user's cart, just return the user
          return user;
        } // else...

        const productInCart = user.cart.find(
          (product) => product.productId === payload.productId
        );

        if (!productInCart) {
          // if there was no such product in the cart yet, add the payload product
          return {
            ...user,
            cart: [
              ...user.cart,
              { productId: payload.productId, amount: payload.amount },
            ],
          };
        } // else increase the product with the payload amount

        return {
          ...user,
          cart: user.cart.map((product) => {
            if (product.productId !== payload.productId) {
              return product;
            }
            return { ...product, amount: product.amount + payload.amount };
          }),
        };
      });
    }
    case "REMOVE_PRODUCT_FROM_CART": {
      return state.map((user) =>
        user.id !== payload.userId
          ? user
          : {
              ...user,
              cart: user.cart.filter(
                (product) => product.productId !== payload.productId
              ),
            }
      );
    }
    case "EMPTY_CART": {
      return state.map((user) =>
        user.id !== payload.userId ? user : { ...user, cart: [] }
      );
    }
    default:
      return state;
  }
}
