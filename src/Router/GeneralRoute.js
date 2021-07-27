import { Route, Switch, useRouteMatch} from 'react-router-dom';
import { useState, useEffect} from 'react'

import Home from '../Component/Home';
import ProductDescription from '../Component/ProductDescription';
import BookCollection from '../Component/BookCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();
    const [allMovies, setMovies]= useState([]);
 

    //Retrieve movie
    useEffect(() => {
      fetch("https://fake-book-db.herokuapp.com/books")
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
        });
    }, []);

    return(        
        <Switch>
            <Route path={`${match.path}/featured-book`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Featured Book"}  content={allMovies.filter((movie) => movie.genre_ids === 2)}/>
                </Container>
                
            </Route>
            <Route path={`${match.path}/best-seller`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Best Seller"} content={allMovies.filter((movie) => movie.genre_ids === 1)} />
                </Container>
            </Route>
            <Route path={`${match.path}/clearance`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Clearance"} content={allMovies.filter((movie) => movie.genre_ids === 3)} />
                </Container>
            </Route>
            <Route path={`${match.path}/java`}>
                <Container className="pg-max-width">
                    <BookCollection title={"JAVA"} content={allMovies.filter((movie) => movie.id >2 && movie.id <17)} />
                </Container>
            </Route>
            <Route path={`${match.path}/web`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Web"} content={allMovies.filter((movie) => movie.id >12 && movie.id <25)} />
                </Container>
            </Route>
      
            <Route path={`${match.path}/:id`}>
                <ProductDescription />        
            </Route>
            <Route path={`${match.path}`}>
                <Home />
            </Route>
        </Switch>
    )

}

export default GeneralRoute;