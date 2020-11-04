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
    ],
  },
];

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
