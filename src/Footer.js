import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Footer.css';
export default function Footer(){
    
    return (
        <Container className="pg-max-width">
            <div className="ml-5">
            <Row className="mt-4">
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>Books</Row>
                    <Row className="foot-col-small" as={Link} to='#'>New Arrivals</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Best Sellers</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Clearance</Row>                   
                </Col>
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>Help</Row>
                    <Row className="foot-col-small" as={Link} to='#'>About Us</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Ordering</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Shipping</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Contact Us</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Term of Use</Row>
                </Col>
                <Col>
                    <Row className="foot-col-top-row" as={Link} to='#'>My Account</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Log in</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Account</Row>
                    <Row className="foot-col-small" as={Link} to='#'>Wishlist</Row>
                    <Row className="foot-col-small" as={Link} to='#'>My Address</Row>
                </Col>              
                
            </Row>

            <Row >
                <Image src="../img/social-icons.png"/>
            </Row>

            </div>
        </Container>
    )
}
