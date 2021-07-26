import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import cartItems from "./ShoppingCart";
import total from "./ShoppingCart";

const Checkout = () => {
    
    return (
        <div>
            <br/><br/><br/>
    
            <Header/>
            
            
            <h1>test</h1>
            <h1>Review your order </h1>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Full Name</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Shipping address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Billing Address </label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="1234 Main St"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Gift cards & promotional codes </label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Payment method </label>
                    <select id="inputState" className="form-select">
                        <option selected>Payment method...</option>
                        <option value="master card">Master card</option>
                        <option value="Visa card">Visa card</option>
                    
                    
                    </select>
                </div>
                <h5>Order Summary</h5>
                {cartItems}
                {total}
                
                
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Place your order</button>
                </div>
            </form>
            
            <Footer/>
        
        </div>
    
    
    )
    
};

export default Checkout;