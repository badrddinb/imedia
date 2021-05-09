import { Route, Switch } from "react-router-dom";

// import Product from './products/Product'
// import ProductAll from './products/ProductAll'
// import ProductCreate from './products/ProductCreate'
// import ProductEdit from './products/ProductEdit'
// import ProductRemove from './products/ProductRemove'

export default function Products() {
  return (
    <div>
      <Switch>
        {/*
        <Route path="/all">
          <ProductAll />
        </Route>
        <Route path="/create">
          <ProductCreate />
        </Route>
        <Route path="/:productId/edit">
          <ProductEdit />
        </Route>
        <Route path="/:productId/remove">
          <ProductRemove />
        </Route>
        <Route path="/:productId">
          <Product />
        </Route>
        */}
      </Switch>
    </div>
  );
}
