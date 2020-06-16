import React, {useEffect} from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Products from './components/Products';

import { BrowserRouter } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { getCatalog } from './actions';

function App() {

  const dispatch = useDispatch();
  const store = useSelector(state => state);
  
  useEffect(() => {
    dispatch(getCatalog());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Products/>
      </BrowserRouter>
    </div>
  );
}

export default App;
