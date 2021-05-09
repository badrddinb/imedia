import { useParams, Link } from "react-router-dom";

function Product() {
  const { productId } = useParams(); // Usage: Number(productId)
  console.log(productId)

  // const [state, setState] = useState([])

  // useEffect(() => {
  //     fetch("/api/data").then(
  //         res => setState(res.data)
  //     )
  // })
  // {state.map( d => <div>{d}</div>)}

  return (
    <div className="product">
      <div className="product_side product_left">
        <div className="product_back"><Link to="/">&lt; Back</Link></div>
        <ul className="product_categories">
            <li className="product_category">categoryTree&gt;</li>
            <li className="product_category">categoryTree&gt;</li>
            <li className="product_category">categoryTree&gt;</li>
        </ul>
        <div className="product_image">
            <img alt="" src="https://purepng.com/public/uploads/large/purepng.com-laptop-notebooklaptopsnotebooknotebook-computerclamshell-1701528354476fgkga.png" />
        </div>
      </div>
      <div className="product_side">
        <h1 className="product_name">Product Name</h1>
        <p className="product_desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ul className="product_prices">
            <li className="product_price">50 EURO</li>
            <li className="product_price">55 DOLLAR</li>
            <li className="product_price">48 POUND</li>
        </ul>
        <button className="product_action">Add to card</button>
      </div>
    </div>
  );
}

export default Product;
