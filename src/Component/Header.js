import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand,NavDropdown} from 'react-bootstrap';
import '../css/Header.css';


export default function Header(){


    return (             
            // to use spacing from boothstrap my-5
            <div className="header-container"> 
                <Container className="pg-max-width">
                    <Navbar variant="dark">
                        <NavbarBrand as={Link} to="/">Bookstore</NavbarBrand>
                        <Nav >
                            <Nav.Link as={Link} to="/product/featured-book">New Arrival</Nav.Link>
                            <Nav.Link as={Link} to="/product/best-seller">Best Seller</Nav.Link>
                            <Nav.Link as={Link} to="/product/clearance">Clearance</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/product/java">JAVA</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/product/web">Web</NavDropdown.Item>                              
                            </NavDropdown>                              
                        </Nav>
                        <Navbar.Toggle/>

                        <Navbar.Collapse className="justify-content-end">
                        <Nav>
                        
                        <Nav.Link as={Link} to="user/sign-in">Sign In</Nav.Link>   
                        <Nav.Link as={Link} to="user/register">Register</Nav.Link>                        
                        </Nav>
                      
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>

    
    )
}