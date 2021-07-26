import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GeneralRoute from '../pages/GeneralRoute';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import ShoppingCart from "../pages/ShoppingCart";
import Admin from '../pages/Admin';
import OrderDetails from '../pages/OrderDetails';
import OrderList from '../pages/OrderList';
import MyAccountPage from '../pages/MyAccountPage';
import '../css/App.css';
import About from "../pages/about";
import ContactUs from "../pages/contactUs";
import Policy from "../pages/policy";
import Checkout from "../pages/checkout";


function App() {
    
    
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/product">
                    <GeneralRoute/>
                </Route>
                
                <Route exact path="/">
                    <HomePage/>
                </Route>
                
                <Route exact path="/sign-up">
                    <SignUpPage/>
                </Route>
                
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                
                <Route exact path="/admin">
                    <Admin/>
                </Route>
                
                <Route exact path="/orderList">
                    <OrderList/>
                </Route>
                
                <Route exact path="/orderDetails">
                    <OrderDetails/>
                </Route>
                
                <Route exact path="/shoppingCart">
                    <ShoppingCart/>
                </Route>
                
                <Route exact path="/my-account">
                    <MyAccountPage/>
                </Route>
                
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/contact">
                    <ContactUs/>
                </Route>
                <Route exact path="/policy">
                    <Policy/>
                </Route>
                <Route exact path="/checkout">
                    <Checkout/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    
    
    );
}


export default App;
