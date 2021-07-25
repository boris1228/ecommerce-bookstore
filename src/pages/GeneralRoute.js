import { Route, Switch, useRouteMatch} from 'react-router-dom';
import { useState, useEffect} from 'react'

import HomePage from './HomePage';
import ProductDescription from '../components/ProductDescription';
import BookCollection from '../components/BookCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();
    const [allBooks, setBooks]= useState([]);
 

    //Retrieve Book
    useEffect(() => {
      fetch("https://bookstore-fake-server.herokuapp.com/books")
        .then((res) => res.json())
        .then((books) => {
          setBooks(books);
        });
    }, []);

    return(        
        <Switch>
            <Route path={`${match.path}/new-arrival`}>
                <Container className="pg-max-width">
                    <BookCollection title={"New Arrival"}  content={allBooks.filter((book) => book.categories = "Open Source")}/>
                </Container>
                
            </Route>
            <Route path={`${match.path}/best-seller`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Best Seller"} content={allBooks.filter((book) => book.categories = "Java")} />
                </Container>
            </Route>
            <Route path={`${match.path}/clearance`}>
                <Container className="pg-max-width">
                    <BookCollection title={"Clearance"} content={allBooks.filter((book) => book.categories = "Web Development")} />
                </Container>
            </Route>
            <Route path={`${match.path}/:isbn`}>
                <ProductDescription />        
            </Route>
            <Route path={`${match.path}`}>
                <HomePage />
            </Route>
        </Switch>
    )

}

export default GeneralRoute;