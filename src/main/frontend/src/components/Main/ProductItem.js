import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="products_item">
      <img alt={product.name ? `${product.name}`: ""} className="item_img" src={product.image} />
      <h3 className="item_name">{product.name}</h3>
      <p className="item_desc">{product.desc}</p>
      <button className="item_action">
        <Link to={`/product/${product.id}`}>Explore</Link>
      </button>
    </div>
  );
}

export default ProductItem;