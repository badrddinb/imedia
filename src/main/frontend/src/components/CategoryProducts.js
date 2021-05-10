import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import ProductItem from "./Main/ProductItem";

function CategoryProducts() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/category/${categoryId}`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error));
  }, [categoryId]);

  return (
    <div>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })
        ) : error ? (
          <p>{error}</p>
        ) : null}
      </div>
    </div>
  );
}

export default CategoryProducts;
