import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/categories/${categoryId}`)
      .then((res) => res.data)
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => setError(error));
  }, [categoryId]);

  return category ? (
    <div className="category">
      <p>{category.id}</p>
      <p>{category.name}</p>
      <p>{category.desc}</p>
      <p>{category.parent}</p>
      <p>{category.icon}</p>
    </div>
  ) : error ? (
    <p>{error}</p>
  ) : null;
}

export default Category;
