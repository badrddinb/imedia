import { Route, Switch } from "react-router-dom";

import Categories from './Admin/Categories'
import Products from './Admin/Products'

export default function Admin({ match }) {
  return (
    <Switch>
      <Route path={`${match.path}/categories`} component={Categories} />
      <Route path={`${match.path}/products`} component={Products} />
    </Switch>
  );
}
