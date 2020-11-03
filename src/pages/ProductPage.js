import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";

export default function ProductPage() {
  const { id } = useParams();
  const product = useSelector(selectProductById(Number(id)));
  console.log("what is product", product);
  return <div className="page"> product page</div>;
}
