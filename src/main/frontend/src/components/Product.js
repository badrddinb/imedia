import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [prices, setPrices] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [categoriesTree, setCategoriesTree] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${productId}`)
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
        setPrices(data.prices)
        setCurrencies(["€ EURO", "$ USD", "£ GBP"])
        axios
          .get(`http://localhost:8080/api/categories/tree/${data.categoryId}`)
          .then((res) => res.data)
          .then((data) => {
            setCategoriesTree(data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div className="product" id={product.id}>
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
          <img alt="" src={product.image} />
        </div>
      </div>
      <div className="product_side">
        <h1 className="product_name">{product.name}</h1>
        <p className="product_desc">{product.desc}</p>
        <ul className="product_prices">
          { prices.length > 0 ? prices.map((price, index) => {
            return <li className="product_price" key={index}>{price}<br/>({currencies[index]})</li>
          })
          : null}
        </ul>
        <button className="product_action">Add to card</button>
      </div>
    </div>
  );
}

export default Product;
