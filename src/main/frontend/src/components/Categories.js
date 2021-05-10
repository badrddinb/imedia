import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar, Nav } from "react-bootstrap";

import CategoryItem from "./Main/CategoryItem";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/categories/all")
      .then((res) => res.data)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home (All products)</Nav.Link>
          <Nav.Link active href="/categories">
            Categories
          </Nav.Link>
          <Nav.Link href="/admin">Admin CRUD</Nav.Link>
        </Nav>
      </Navbar>
      <div className="products">
        {categories.length > 0 ? (
          categories.map((category) => {
            return <CategoryItem key={category.id} category={category} />;
          })
        ) : error ? (
          <p>{error}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Categories;
