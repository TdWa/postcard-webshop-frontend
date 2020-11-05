export const addProduct = (name, description, url, price, tags, categories) => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: Date.now(),
      name,
      description,
      url,
      price,
      tags,
      categories,
      popularity: 0,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
