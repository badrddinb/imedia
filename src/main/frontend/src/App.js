import React from "react";
import './App.css'
import { Route, Switch } from "react-router-dom";

import Product from './components/Product'
import Category from './components/Category'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import Admin from './components/Admin'
import Main from './components/Main'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/category/:categoryId">
          <Category />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/productscategory/:categoryId">
          <CategoryProducts />
        </Route>
        <Route path="/admin" component={Admin} />
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}
