import {useState, useEffect} from 'react';

import { Container,Col, Row, Button, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';


import '../css/ProductDescription.css';
import SmallImgCard from './SmallImgCard';
import CardInfo from './CardInfo';


export default function ProductDescription(){
   
    
    const {isbn} = useParams();
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://bookstore-fake-server.herokuapp.com/books/${isbn}`)
          .then((res) => res.json())
          .then((books) => {
            setBooks(books);
            setIsLoading(false);
          });
        
      }, []);
    
 

    const addPurchase = () =>{
        
    }
    


    if(!books) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }
    



    return(
        <Container className="mt-57 pg-max-width">
            
            <div className="product-hero-background" >
                <div>
            <Row className="product-main-section">
                <Col lg={2}>
                    <div className="pt-3">
                     <SmallImgCard books={books}/>
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div className="pt-3">
                     <CardInfo books={books}/>
                     <Container>
                        
                        <Button className="book-button" onClick={addPurchase}>Add to Cart ${books.pageCount} </Button>
                    </Container>
                    </div>
                    
                </Col> 
            </Row>
            </div>
            </div>
        </Container>
    )



    
}