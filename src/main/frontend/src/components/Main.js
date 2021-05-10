import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

import ProductItem from "./Main/ProductItem"

function Main() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/all")
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link active href="/">Home</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/admin">Admin CRUD</Nav.Link>
        </Nav>
      </Navbar>
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

export default Main;
