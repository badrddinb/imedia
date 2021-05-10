import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Category from './categories/Category'
import CategoryAll from './categories/CategoryAll'
import CategoryCreate from './categories/CategoryCreate'
import CategoryEdit from './categories/CategoryEdit'
import CategoryRemove from './categories/CategoryRemove'

export default function Categories({ match }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/admin/products">Products</Nav.Link>
          <Nav.Link active href="/admin/categories">Categories</Nav.Link>
          <Nav.Link href="/admin/categories/create">Create new category</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path={`${match.path}`}>
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
