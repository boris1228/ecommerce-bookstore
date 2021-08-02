import {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';
import UserRouter from './Router/UserRouter';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import ShoppingCart from './Component/ShoppingCart';


function App() {
    const [allMovies, setMovies] = useState([]);
    
    
    //Retrieve movie
    // useEffect(() => {
    //   fetch("https://fake-moviedb.herokuapp.com/movies")
    //     .then((res) => res.json())
    //     .then((movies) => {
    //       setMovies(movies);
    //     });
    // }, []);
    
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/user">
                    <UserRouter/>
                </Route>
                <Route path="/product">
                    <GeneralRoute/>
                </Route>
                <Route
                    path="/shoppingCart">
                    <ShoppingCart/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
