import {useState, useEffect} from 'react';

import { Container,Col, Row, Button, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';


import '../css/ProductDescription.css';
import SmallImgCard from './SmallImgCard';
import CardInfo from './CardInfo';


export default function ProductDescription(){
   
    
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://fake-book-db.herokuapp.com/books/${id}`)
          .then((res) => res.json())
          .then((movie) => {
            setMovie(movie);
            setIsLoading(false);
          });
        
      }, []);
    
    

    const addPurchase = () =>{
        
    }
    


    if(!movie) {
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
            
            <div className="product-hero-background" style={{backgroundImage:`url(${movie.backdrop_path})`}}>
                <div>
            <Row className="product-main-section">
                <Col lg={2}>
                    <div className="pt-3">
                     <SmallImgCard movie={movie}/>
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div className="pt-3">
                     <CardInfo movie={movie}/>
                     <Container>
                        <Button className="movie-button" onClick={addPurchase}>Buy ${movie.price} </Button>
                    </Container>
                    </div>
                    
                </Col> 
            </Row>
            </div>
            </div>
        </Container>
    )



    
}