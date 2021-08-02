import {Carousel, Container} from 'react-bootstrap';

export default function Hero(){
    const heroImgs = ['book1.png','book3.png']

    return(
        <div className="mt-57">
        <Container className="pg-max-width">
            <Carousel>
                {heroImgs.map(item=>(
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`./img/hero/${item}`}
                        alt="First slide"
                    />
                </Carousel.Item>
                ))};
            </Carousel>
        </Container>
        </div>
    )
}