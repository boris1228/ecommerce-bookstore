import { useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';
import UserRouter from './Router/UserRouter';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import OrderList from './pages/OrderList';
import OrderDetails from './pages/OrderDetails';

import {auth} from './Component/firebase';
import {useStateValue} from './Component/StateProvider'

//

function App() {
  const [allMovies, setMovies]= useState([]);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("User is: ", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 

 
  useEffect(() => {
    fetch("https://afternoon-caverns-41327.herokuapp.com/books")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />   
      <Switch>        
        <Route exact path="/user">
          <UserRouter />
        </Route>
        <Route exact path="/product">
          <GeneralRoute/>
        </Route>
        <Route exact path="/">    
          <Home />                  
        </Route>   
        <Route exact path="/orderlist">
          <OrderList />
        </Route>    
        <Route exact path="/orderdetail">
          <OrderDetails />
        </Route>
      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;
