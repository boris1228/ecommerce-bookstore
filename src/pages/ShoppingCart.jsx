import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../css/shoppingCart.css'


const ShoppingCart = () => {
    
    return (
        <>
       
            <div className={"ShoppingCart"}>
                <ul>
                    
                    <li>value 1</li>
                    <li>value 2</li>
                    <li>value 3</li>
                
                </ul>
            
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="button">Check out</button>
            </div>
   
        
        
        </>
    )
    
    
};

export default ShoppingCart;