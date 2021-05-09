import { useState, useEffect } from "react"
import axios from 'axios'

import ProductAllItem from './ProductAllItem'

function ProductAll() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/all")
      .then(res => res.data)
      .then(data => {
        setProducts(data)
      })
      .catch(error => setError(error))
  }, []);

  return (
    <div className="products">
      {products.length > 0 ?
      products.map(product => {
        return <ProductAllItem key={product.id} product={product} />
      }): error ?
      <p>{error}</p>:
      null}
    </div>
  );
}

export default ProductAll;
