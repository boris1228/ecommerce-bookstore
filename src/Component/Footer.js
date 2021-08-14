import React from 'react';
import {SocialIcon} from 'react-social-icons';
import '../css/Footer.css';

import {Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Footer = () => {
    const socialIconStyle = {height: 40, width: 40};
    return (
        <div className="pg-max-width">
            <div className="ml-5">
                
                <div className="mt-3">
                    <h3>Logo</h3>
                </div>
                
                <Row className="mt-4">
                    <Col><h3>Follow Us</h3>
                        <ul className="foot-col-top-row">
                            <li><SocialIcon url="https://facebook.com" style={socialIconStyle}
                                            fgColor="white"/> Facebook
                            </li>
                            <li><SocialIcon url="https://instagram.com" style={socialIconStyle}
                                            fgColor="white"/> Instgram
                            </li>
                            <li><SocialIcon url="https://twitter.com" style={socialIconStyle} fgColor="white"/> Twitter
                            </li>
                        </ul>
                    </Col>
                    
                    
                    <Col>
                        <h3>Help</h3>
                        <ul className="foot-col-top-row">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contactus">Contact US</Link></li>
                            <li><Link to="/Policy">Policy </Link></li>
                        
                        </ul>
                    </Col>
                    
                    <Col>
                        <h3>My Account</h3>
                        <ul className="foot-col-top-row">
                            <li>Log in</li>
                            <li>Profile</li>
                            <li>Wishlist</li>
                            <li>Order History</li>
                        </ul>
                    </Col>
                
                </Row>
                <hr/>
                <div className="foot-last-info">
                    <p className="foot-separator">
                        &copy;{new Date().getFullYear()} MyFlix Movie Database | All rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer