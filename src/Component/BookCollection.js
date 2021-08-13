import {Container, Row, Col, Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SmallImgCard from './SmallImgCard';
import '../css/BookCollection.css';

export default function FeaturedSection(props){
    const {title, content} = props
    const {id} = useParams();
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://afternoon-caverns-41327.herokuapp.com/books")
          .then((res) => res.json())
          .then((movies) => {
            setMovies(movies);
          });
      }, []);

 

    if(!movies) {
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
                        <Col xs={4} md={3} lg={2} key={result.id}>
                            <SmallImgCard movie={result}/>
                        </Col>
                    ))}
                </Row>                
            </Container>
        </div>
  
    )
}