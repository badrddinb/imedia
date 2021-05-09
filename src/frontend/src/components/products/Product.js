import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${productId}`)
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => setError(error));
  }, [productId]);

  return Object.entries(product).length ? (
    <div className="product">
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.desc}</p>
      <ul>
        {product.prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
      <p>{product.categoryId}</p>
      <p>{product.image}</p>
    </div>
  ) : error ? (
    <p>{error}</p>
  ) : null;
}

export default Product;
