// import React, { useState, useEffect, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import AsyncSelect from "react-select/async";
// import axios from "axios";
// import styles from "./AddProductForm.module.css";
// //

// import { useMediaQuery } from "./hooks";
// import productOperations from "../../Redux/product/productOperations";

// const SEARCH_URL = "https://slimmom.herokuapp.com/products";
// const END_OPTIONS = "&page=1&limit=10";
// const QUERY = `?name=`;

// export default function AddProductForm() {
//   const dispatch = useDispatch();

//   const [selectedTitle, setSelectedTitle] = useState("");
//   const [productId, setIdProduct] = useState("");
//   const [gramProd, setGramProd] = useState(0);

//   const handleSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       dispatch(productOperations.addProduct(productId, gramProd, "2020-12-13"));
//       // setIsSubmitting(true);
//       // window.alert(JSON.stringify(e, 0, 2));
//     },
//     [dispatch]
//   );

//   const handleChange = useCallback(
//     (e) => setGramProd(e.currentTarget.value),
//     []
//   );

//   //ф-ция которая вываливает данные в options
//   const handleSearchTitles = (movieTitle) => {
//     console.log("searching for", movieTitle);
//     let searchTerm = movieTitle;

//     if (!movieTitle || movieTitle === " ") {
//       searchTerm = "омлет";
//     }

//     const urlRequest = `${SEARCH_URL}${QUERY}${searchTerm}${END_OPTIONS}`;
//     const newRequest = axios.get(urlRequest);

//     if (newRequest) {
//       // new promise: pending
//       return newRequest.then((response) => {
//         console.log("response.data.results", response.data.docs);
//         // promise resolved : now I have the data, do a filter
//         const compare = response.data.docs.filter((i) =>
//           i.title.ru.toLowerCase().includes(movieTitle.toLowerCase())
//         );
//         console.log("compare", compare);
//         // reurning the label for react-select baed on the title
//         return compare.map((prod) => ({
//           label: prod.title.ru,
//           value: prod._id,
//         }));
//       });
//     }
//   };
//   //
//   const currentHideNav = useMediaQuery("(min-width: 767px)");
//   return (
//     <>
//       <form className={`${styles.ProductEditor} `} onSubmit={handleSubmit}>
//         <div className={`${styles.ProductEditorLabel} `}>
//           <AsyncSelect
//             placeholder="Введите название продукта*"
//             className={`${styles.ProductEditorInput} ${styles.ProductEditorInputName}`}
//             cacheOptions
//             defaultOptions
//             value={selectedTitle}
//             loadOptions={handleSearchTitles}
//             onChange={(property, value) => {
//               console.log(property);
//               setSelectedTitle(property);
//               setIdProduct(property.value);
//             }}
//           />
//         </div>
//         <label className={`${styles.ProductEditorLabel} ${styles.Otstup}`}>
//           <input
//             className={`${styles.ProductEditorInput}  ${styles.ProductEditorInputKkal}`}
//             type="number"
//             placeholder="Граммы*"
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit" className={styles.ProductEditorButton}>
//           {currentHideNav ? "+" : "Добавить"}
//         </button>
//       </form>
//     </>
//   );
// }
