export const selectAllProducts = (state) => state.products;

export const selectProductCategories = (state) => {
  return [...new Set(state.products.flatMap((p) => p.categories))];
};

export const selectProductById = (id) => (state) =>
  state.products.find((p) => p.id === id);

export const selectProductsByCart = (cart) => (state) =>
  cart.map((pro) => state.products.find((p) => p.id === pro.productId));

export const selectProductsByCategory = (category) => (state) =>
  category === "all categories"
    ? state.products
    : state.products.filter((p) => p.categories.includes(category));
