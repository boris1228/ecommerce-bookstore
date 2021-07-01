import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App() {


  return (
    <BrowserRouter>
      <Header />   
      <Switch>        
        {/* <Route path="/product">
          <GeneralRoute/>
        </Route> */}
        <Route path="/">    
          <Home />                  
        </Route>        
      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}


export default App;
