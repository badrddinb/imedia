import { Route, Switch } from "react-router-dom";

import Category from './categories/Category'
import CategoryAll from './categories/CategoryAll'
import CategoryCreate from './categories/CategoryCreate'
import CategoryEdit from './categories/CategoryEdit'
import CategoryRemove from './categories/CategoryRemove'

export default function Categories({ match }) {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/all`}>
          <CategoryAll />
        </Route>
        <Route path={`${match.path}/create`}>
          <CategoryCreate />
        </Route>
        <Route path={`${match.path}/:categoryId/edit`}>
          <CategoryEdit />
        </Route>
        <Route path={`${match.path}/:categoryId/remove`}>
          <CategoryRemove />
        </Route>
        <Route path={`${match.path}/:categoryId`}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
}
