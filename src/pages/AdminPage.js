import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/products/actions";
import { selectAllProducts } from "../store/products/selectors";
import ProductCard from "../components/ProductCard";
import "./AdminPage.scss";

const formInitialState = {
  name: "",
  description: "",
  url: "",
  price: 0,
  tags: [],
  categories: [],
};

export default function AdminPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(formInitialState);
  const [idToRemove, setIdToRemove] = useState("");
  const products = useSelector(selectAllProducts);

  const submitAddProductForm = (event) => {
    event.preventDefault();

    dispatch(addProduct({ ...form, price: Number(form.price) }));

    setForm(formInitialState);
  };

  return (
    <div id="admin" className="page">
      <h2>Add product</h2>
      <form onSubmit={submitAddProductForm}>
        <div className="row">
          <div className="colOne">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="colTwo">
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="colOne">
            <label htmlFor="description">Description:</label>
          </div>
          <div className="colTwo">
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="colOne">
            <label htmlFor="description">Image URL:</label>
          </div>
          <div className="colTwo">
            <input
              id="url"
              name="url"
              type="text"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
            />
          </div>
        </div>

        <div className="row">
          <div className="colOne">
            <label htmlFor="description">Price:</label>
          </div>
          <div className="colTwo">
            <input
              id="price"
              name="price"
              type="number"
              min={0.1}
              step={0.1}
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />
          </div>
        </div>

        <button type="submit">Add this product!</button>
      </form>
      <br></br>
      <h2>Remove product</h2>
      <div className="row">
        <div className="colOne">
          <label htmlFor="id">Id:</label>
        </div>
        <div className="colTwo">
          <input
            id="id"
            name="id"
            type="number"
            min={0}
            value={idToRemove}
            onChange={(e) => setIdToRemove(Number(e.target.value))}
          />
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(removeProduct(idToRemove));
        }}
      >
        Remove this product!
      </button>
      {products.find((product) => product.id === idToRemove) ? (
        <ProductCard
          {...products.find((product) => product.id === idToRemove)}
        />
      ) : (
        <p>No matching product to remove</p>
      )}
    </div>
  );
}
