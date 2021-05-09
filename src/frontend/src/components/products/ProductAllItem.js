function ProductAllItem({ product }) {
  return (
    <div className="product">
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.desc}</p>
      <ul>
        {product.prices.map((price, index) => (
          <li key={index}>{price}</li>
        ))}
      </ul>
      <p>{product.categoryId}</p>
      <p>{product.image}</p>
    </div>
  );
}

export default ProductAllItem;
