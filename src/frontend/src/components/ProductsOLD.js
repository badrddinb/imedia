import { Component } from "react";

import ProductsItem from "./ProductsItemOLD";

const tempItemData = {
  product: {
    id: "05153351",
    name: "Product Name",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-laptop-notebooklaptopsnotebooknotebook-computerclamshell-1701528354476fgkga.png",
  },
};

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // componentDidMount() {
  //   fetch("/api/data").then((res) =>
  //     this.setState({ ...this.state, products: res.data })
  //   );
  // }
  // {this.state.data.map( d => <div>{d}</div>)}

  render() {
    return (
      <div>
        <div className="products">
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
          <ProductsItem product={tempItemData.product} />
        </div>
      </div>
    );
  }
}

export default Products;
