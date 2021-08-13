import { useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';
import UserRouter from './Router/UserRouter';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';

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
        <Route path="/user">
          <UserRouter />
        </Route>
        <Route path="/product">
          <GeneralRoute/>
        </Route>
        <Route path="/">    
          <Home />                  
        </Route>        
      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;
