import React from "react";
import './App.css'
import { Route, Switch } from "react-router-dom";

// import ProductsOLD from './components/ProductsOLD'
// import ProductOLD from './components/ProductOLD'

import Categories from './components/Categories'
import Products from './components/Products'

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/products" component={Products} />
        {/*
        <Route path="/products/all">
          <ProductAll />
        </Route>
        <Route path="/products/create">
          <ProductCreate />
        </Route>
        <Route path="/products/:productId/edit">
          <ProductEdit />
        </Route>
        <Route path="/products/:productId/remove">
          <ProductRemove />
        </Route>
        <Route path="/products/:productId">
          <Product />
        </Route>
        */}
        {/*
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/:productId">
          <Product />
        </Route>
        */}
      </Switch>
    </div>
  );
}
