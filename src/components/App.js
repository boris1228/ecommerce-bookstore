import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
//import GeneralRoute from './Router/GeneralRoute';
//import Header from './Header';
import Footer from './Footer';
//import Home from './Home';
import '../App.css';
import ShoppingCart from "./shoppingCart";

function App() {


  return (
    
      //   <Switch>
      //     {/* <Route path="/product">
      //       <GeneralRoute/>
      //     </Route> */}
      //     <Route path="/">
      //       <Home />
      //     </Route>
      //   </Switch>
    //   <Footer/>    
    // </BrowserRouter>
      <ShoppingCart/>
  );
}


export default App;
