import React from 'react';
import {SocialIcon} from 'react-social-icons';
import '../css/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
    const socialIconStyle = {height: 40, width: 40};
    return (
        <div className="footer-container">
            <div className="footer-row">
                {/* Logo */}
                <div className="footer-column">
                    <h3>Logo</h3>
                </div>
                {/* Column 1 */}
                <div className="footer-column">
                    <h3>Follow Us</h3>
                    <ul className="list-unstyled">
                        <li><SocialIcon url="https://facebook.com" style={socialIconStyle} fgColor="white"/> book.web.fb
                        </li>
                        <li><SocialIcon url="https://instagram.com" style={socialIconStyle}
                                        fgColor="white"/> book.web.ins
                        </li>
                        <li><SocialIcon url="https://twitter.com" style={socialIconStyle} fgColor="white"/> book.web.tw
                        </li>
                    </ul>
                </div>
                {/* Column 2 */}
                <div className="footer-column">
                    <h3>Help</h3>
                    <ul className="list-unstyled">
                        <Link to="/about">About</Link>
                        <Link to="/contact">
                            <li>Contact Us</li>
                        </Link>
                        <Link to="/policy">
                            <li>Policy</li>
                        </Link>
                    
                    
                    </ul>
                </div>
                {/* Column 3 */}
                <div className="footer-column">
                    <h3>My Account</h3>
                    <ul className="list-unstyled">
                        <li>Log in(link)</li>
                        <li>Profile(link)</li>
                        <li>Wishlist(link)</li>
                        <li>Order History(link)</li>
                        <Link to='/shoppingCart'>
                            <li>Cart</li>
                        </Link>
                    
                    </ul>
                </div>
            
            </div>
            <hr/>
            <div className="footer-row">
                <p className="column-sm">
                    &copy;{new Date().getFullYear()} Book Web | All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer
