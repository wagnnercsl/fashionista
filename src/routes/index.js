import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from '../components/Products';
import Product from '../components/Product';

const Routes = () => (
    <Switch>
      <Route exact path="/" component="">
  
      </Route>
  
      <Route exact path="/products" component={Products}>
  
      </Route>

      <Route path="/product/:name" component={Product}>
  
      </Route>
    </Switch>
  );
  
  export default Routes;
  