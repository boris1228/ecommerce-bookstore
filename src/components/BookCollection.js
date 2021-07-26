import {Container, Row, Col, Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SmallImgCard from './SmallImgCard';
import '../css/BookCollection.css';

export default function FeaturedSection(props){
    const {title, content} = props
    const {isbn} = useParams();
    const [books, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://bookstore-fake-server.herokuapp.com/books")
          .then((res) => res.json())
          .then((books) => {
            setBooks(books);
          });
      }, []);

 

    if(!books) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className='feature-section-container'>            
            <Container className="row-poster">
            <h5>{title}</h5>
                <Row>
                    {content.map(result =>(
                        <Col xs={4} md={3} lg={2} key={result.isbn}>
                            <SmallImgCard books={result}/>
                        </Col>
                    ))};
                </Row>                
            </Container>
        </div>
  
    )
}