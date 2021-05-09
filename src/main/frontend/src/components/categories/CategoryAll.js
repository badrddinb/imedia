import { useState, useEffect } from "react"
import axios from 'axios'

import CategoryAllItem from './CategoryAllItem'

function CategoryAll() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/categories/all")
      .then(res => res.data)
      .then(data => {
        setCategories(data)
      })
      .catch(error => setError(error))
  }, []);

  return (
    <div className="categories">
      {categories.length > 0 ?
      categories.map(category => {
        return <CategoryAllItem key={category.id} category={category} />
      }): error ?
      <p>{error}</p>:
      null}
    </div>
  );
}

export default CategoryAll;
