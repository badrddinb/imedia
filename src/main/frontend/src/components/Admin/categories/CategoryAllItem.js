
function CategoryAllItem({ category }) {

  return (
    <div className="category">
      <p>{category.id}</p>
      <p>{category.name}</p>
      <p>{category.desc}</p>
      <p>{category.parent}</p>
      <p>{category.icon}</p>
    </div>
  );
}

export default CategoryAllItem;
