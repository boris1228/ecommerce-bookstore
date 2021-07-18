import {Carousel, Container} from 'react-bootstrap';

export default function Book(){
    const bookImgs = ['book1.png','book2.png']

    return(
        <div className="mt-57">
        <Container className="pg-max-width">
            <Carousel>
                {bookImgs.map(item=>(
                <Carousel.Item key={item}>
                    <img
                        className="d-block w-100"
                        src={`./img/book/${item}`}
                        alt="First slide"
                    />
                </Carousel.Item>
                ))};
            </Carousel>
        </Container>
        </div>
    )
}