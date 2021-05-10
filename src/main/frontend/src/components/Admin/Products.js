import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

import Product from './products/Product'
import ProductAll from './products/ProductAll'
import ProductCreate from './products/ProductCreate'
import ProductEdit from './products/ProductEdit'
import ProductRemove from './products/ProductRemove'

export default function Products({ match }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link active href="/admin/products">Products</Nav.Link>
          <Nav.Link href="/admin/categories">Categories</Nav.Link>
          <Nav.Link href="/admin/products/create">Create new product</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path={`${match.path}/`}>
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
