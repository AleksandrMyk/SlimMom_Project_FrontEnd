const getProducts = ({ nameProd }) =>
  fetch("https://slimmom.herokuapp.com/products", {
    method: "get",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ productId, weight, date }),
  }).then((r) => r.json());

export default { getProducts };
