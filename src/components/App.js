import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import '../App.css';
import MyAccountPage from '../pages/MyAccountPage';

function App() {


  return (
    <BrowserRouter>
      <Header />   
      <Switch>        
        <Route path="/product">
          <GeneralRoute/>
        </Route>
         <Route path="/">    
          <Home />                  
        </Route>

        <Route path="/my-account">
          <MyAccountPage/>
        </Route>  

      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}


export default App;
