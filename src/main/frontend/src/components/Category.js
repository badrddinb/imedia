import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [categoriesTree, setCategoriesTree] = useState([]);
  const [hasProducts, setHasProducts] = useState(false);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/categories/${categoryId}`)
    .then((res) => res.data)
    .then((data) => {
        setCategory(data)
        axios
          .get(`http://localhost:8080/api/categories/tree/${data.id}`)
          .then((res) => res.data)
          .then((data) => {
            setCategoriesTree(data);
          })
          .catch((error) => console.log(error));
        axios
          .get(`http://localhost:8080/api/products/category/${data.id}`)
          .then((res) => res.data)
          .then((data) => {
              if (data) setHasProducts(data);
          })
          .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
  })

  return (
    <div className="product" id={category.id}>
      <div className="product_side product_left">
        <div className="product_back">
          <Link to="/">&lt; Back</Link>
        </div>
        <ul className="product_categories">
          {categoriesTree
            ? categoriesTree.map(category => {
                return (
                  <li className="product_category" key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}&gt;</Link>
                  </li>
                );
              })
            : null}
        </ul>
        <div className="product_image">
          <img alt="" src={category.icon} />
        </div>
      </div>
      <div className="product_side">
        <h1 className="product_name">{category.name}</h1>
        <p className="product_desc">{category.desc}</p>
        {hasProducts ? <Link to={`/productscategory/${category.id}`}><button className="product_action">Explore Products</button></Link> : null }
      </div>
    </div>
  );
}

export default Category;