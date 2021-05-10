import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <div className="products_item">
      <img alt={category.name ? `${category.name}`: ""} className="item_img" src={category.icon} />
      <h3 className="item_name">{category.name}</h3>
      <p className="item_desc">{category.desc}</p>
      <button className="item_action">
        <Link to={`/category/${category.id}`}>Explore</Link>
      </button>
    </div>
  );
}

export default CategoryItem;