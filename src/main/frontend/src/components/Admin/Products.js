import { Route, Switch } from "react-router-dom";

import Product from './products/Product'
import ProductAll from './products/ProductAll'
import ProductCreate from './products/ProductCreate'
import ProductEdit from './products/ProductEdit'
import ProductRemove from './products/ProductRemove'

export default function Products({ match }) {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`}>
          <ProductAll />
        </Route>
        <Route path={`${match.path}/create`}>
          <ProductCreate />
        </Route>
        <Route path={`${match.path}/:productId/edit`}>
          <ProductEdit />
        </Route>
        <Route path={`${match.path}/:productId/remove`}>
          <ProductRemove />
        </Route>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}
