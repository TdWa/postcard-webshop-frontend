export const selectAllProducts = (state) => state.products;

export const selectProductCategories = (state) => {
  const categories = [];
  state.products.forEach((product) => {
    product.categories.forEach((category) => {
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
  });
  return categories;
};

export const selectProductById = (id) => (state) =>
  state.products.find((p) => p.id === id);

export const selectProductsByCategory = (category) => (state) =>
  category === "all categories"
    ? state.products
    : state.products.filter((p) => p.categories.includes(category));
