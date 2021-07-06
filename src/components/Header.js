import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand, NavDropdown} from 'react-bootstrap';
//import {SearchInput} from "evergreen-ui";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import '../css/Header.css';



export default function Header(){


    return (
            // to use spacing from boothstrap my-5
            <div className="header-container">
                <Container className="pg-max-width">
                    <Navbar variant="dark">
                        <NavbarBrand as={Link} to="/">Everyday low prices</NavbarBrand>
                        <Nav >
                            <Nav.Link as={Link} to="#">New Arrival</Nav.Link>
                            <Nav.Link as={Link} to="#">Best Seller</Nav.Link>
                            <Nav.Link as={Link} to="#">Clearance</Nav.Link>

                        </Nav>
                        <Navbar.Toggle/>

                        <Navbar.Collapse className="justify-content-start">
                        <Nav>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#">Biography</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">Children</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">Cooking</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">Fiction</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#">Health</NavDropdown.Item>
                            </NavDropdown>
                            {/* {!user && '/login'} : means only redirect to /login if no user */}
                            {/* <Nav.Link as={Link} onClick={handleAuthentication} to={!user && '/user/sign-in'}>
                                {user? 'Sign Out':'Sign In'}
                            </Nav.Link> */}
                            <Nav.Link as={Link} to={'#'}>
                                {/* <ShoppingCartIcon /> */}
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {/* <SearchInput placeholder="Search Books" width="100%"/> */}
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>


    )
}