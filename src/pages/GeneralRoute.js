import { Route, Switch, useRouteMatch} from 'react-router-dom';
import { useState, useEffect} from 'react'

import HomePage from './HomePage';
import ProductDescription from '../components/ProductDescription';
import BookCollection from '../components/BookCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();
    const [allMovies, setMovies]= useState([]);
 
    useEffect(() => {
        fetch("https://fake-book-db.herokuapp.com/books")
          .then((res) => res.json())
          .then((movies) => {
            setMovies(movies);
          });
      }, []);


    return(        
        <Switch>
            <Route path={`${match.path}/new-arrival`}>
                <Container className="pg-max-width">
                    <BookCollection title={"New Arrival"}  content={allMovies.filter((movie) => movie.genre_ids === 1)} />
                </Container>
                
            </Route>
            <Route path={`${match.path}/best-seller`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Best Seller"} content={allMovies.filter((movie) => movie.genre_ids === 2)} />
                </Container>
            </Route>
            <Route path={`${match.path}/clearance`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Clearance"} content={allMovies.filter((movie) => movie.genre_ids === 3)} />
                </Container>
            </Route>
            <Route path={`${match.path}/:id`}>
                <ProductDescription />        
            </Route>
            <Route path={`${match.path}`}>
                <HomePage />
            </Route>
        </Switch>
    )

}

export default GeneralRoute;