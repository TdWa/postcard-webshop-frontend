import React, { useEffect } from "react";
import { getNext10Products } from "../store/apiProducts/actions";
import {
  selectLoading,
  selectAPIProducts,
  selectAPIProductsCount,
  selectAPIProductsError,
} from "../store/apiProducts/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function TestPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const products = useSelector(selectAPIProducts);
  const count = useSelector(selectAPIProductsCount);
  const error = useSelector(selectAPIProductsError);

  useEffect(() => {
    dispatch(getNext10Products);
  }, [dispatch]);

  return (
    <div className="page">
      <h2>Test Page</h2>
      {products.map((row) => (
        <p key={row.id}>{row.name}</p>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && products.length < count && (
        <button onClick={() => dispatch(getNext10Products)}>Load more</button>
      )}
      <br></br>
      <br></br>
      <p>{error}</p>
    </div>
  );
}

// console.log(
//   "loading?:",
//   loading,
//   "products:",
//   products,
//   "count:",
//   count,
//   "error:",
//   error
// );

// const [data, setData] = useState({
//   loading: false,
//   error: "",
//   count: 0,
//   rows: [],
// });

// console.log(
//   data,
//   data.count,
//   data.rows.length,
//   data.rows.length < data.count
// );

/*
  async function getNext10Products() {
    try {
      // setData({ ...data, loading: true });
      dispatch(startLoading());

      const response = await axios.get(
        `http://localhost:4000/products?limit=10&offset=${products.length}`
      );

      dispatch(
        fetch10APIProducts({
          rows: response.data.rows,
          count: response.data.count,
        })
      );

      // setData({
      //   loading: false,
      //   error: "",
      //   count: response.data.count,
      //   rows: [
      //     ...data.rows,
      //     ...response.data.rows.map((row) => {
      //       return {
      //         ...row,
      //         categories: row.categories.map((cat) => cat.name),
      //       };
      //     }),
      //   ],
      // });
    } catch (e) {
      console.log(e.message);
      // setData({ ...data, error: e.message });
      dispatch(setFetchError(e.message));
    }
  }
  */

// return (
//   <div className="page">
//     <h2>Test Page</h2>
//     {data.rows.map((row) => (
//       <p key={row.id}>{row.name}</p>
//     ))}
//     {data.loading && <p>Loading...</p>}
//     {!data.loading && data.rows.length < data.count && (
//       <button onClick={() => getNext10Products()}>Load more</button>
//     )}
//     <br></br>
//     <br></br>
//     <p>{data.error}</p>
//   </div>
// );

// const response = await axios.post('/patients', {
//   firstName: 'Finn',
//   lastName: 'Williams'
// });
