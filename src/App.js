import React, {useEffect} from 'react'
import "./App.css";
/*import Layout from "./components/Layout/Layout"*/
import { Route, Switch} from "react-router-dom"
import Home from "./containers/Home/Home";
import Singin from "./containers/Singin/Singin";
import Singup from "./containers/Singup/Singup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

import {getAllCategories, isUserLoginIn, getInitData} from './actions/actions'

import Products from './containers/Products/Products';
import Orders from './containers/Orders/Orders';
import Category from './containers/Categories/Category';
import Page from './containers/Page/Page';
import Settings from './containers/Settings/Settings';
import Brands from './containers/Brands/Brands';
//import { getInitData } from './actions/initData.action';



function App() {



  const dispatch = useDispatch();  
  const auth = useSelector(state => state.auth);

  // useEffect hoks for vérifer id login or not 
  // exisste 2 type f use effect -> ComponentDidmount and ComponentDidUpdate
  useEffect( () =>{
    // check if user authenticate 
    if (!auth.authenticate) {
      // if not chek if token existe in localstorage --> if existe => user -> login
      dispatch(isUserLoginIn());

      /*dispatch(getAllCategories())*/      
    }

    if (auth.authenticate) {
      dispatch(getInitData())
    }
    

  }, [auth.authenticate]);





  return (
    <div className="App">

     
        <Switch>
          <PrivateRoute path="/" exact component={Home} />

          <PrivateRoute path="/page"  component={Page} />

          <PrivateRoute path="/brands"  component={Brands} />

          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/orders" component={Orders} />
          <PrivateRoute path="/category" component={Category} />
          <PrivateRoute path="/settings" component={Settings} />

          <Route path="/singin" component={Singin} />
          <Route path="/singup" component={Singup} />
        </Switch>
      
      
    </div>
  );
}

export default App;
