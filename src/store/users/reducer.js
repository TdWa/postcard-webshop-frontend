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
      { productId: 14, amount: 1 },
      { productId: 21, amount: 3 },
    ],
  },
];

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "CHANGE_PRODUCTAMOUNT_IN_CART": {
      return state.map((user) => {
        if (user.id !== payload.userId) {
          // if it is not the user's cart, just return the user
          return user;
        } // else...

        const productInCart = user.cart.find(
          (product) => product.productId === payload.productId
        );

        if (!productInCart) {
          // if there was NOT such product in the cart yet...
          if (payload.amount === 0) {
            // if the payload amount was 0 don't change anything
            return user;
          }

          return {
            // else add the payload to the user's cart
            ...user,
            cart: [
              ...user.cart,
              { productId: payload.productId, amount: payload.amount },
            ],
          };
        }
        // if there WAS such a product then...
        if (payload.amount === 0) {
          // if the payload amount was 0 remove the product from the cart
          return {
            ...user,
            cart: user.cart.filter(
              (product) => product.productId !== payload.productId
            ),
          };
        }

        // else change the product amount to the payload amount
        return {
          ...user,
          cart: user.cart.map((product) => {
            if (product.productId !== payload.productId) {
              return product;
            }
            return {
              ...product,
              amount:
                payload.amount > 999 // max 999
                  ? 999
                  : payload.amount,
            };
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
