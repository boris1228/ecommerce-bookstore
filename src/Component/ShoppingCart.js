import React, {useEffect, useState} from 'react';
import '../css/shoppingCart.css'
import {Link} from "react-router-dom";



const ShoppingCart = ({books}) => {
    
    const [bookes, setBookes] = useState({hits: []});
    const [book, setBook] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const items = [
        {
            id: 1,
            name: "overwatch",
            price: 20,
        },
        {
            id: 2,
            name: "minecraft",
            price: 32,
        },
        {
            id: 3,
            name: "fortnite",
            price: 51,
        },
    ];
    useEffect(() => {
        total();
    }, [book]);
    
    const total = () => {
        let price = 0;
        for (let i = 0; i < book.length; i++) {
            price += book[i].price;
        }
        setSubTotal(price);
    };
    const addToCart = (el) => {
        setBook([...book, el]);
    };
    const listItems = items.map((el) => (
        
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="add" onClick={() => addToCart(el)}/>
        </div>
    ));
    const cartItems = book.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price} \n`}
            <input type="submit" value="Delete" onClick={() => deleteFromCart(el)}/>
        </div>
    ));

// need to fix that delete function
    
    function deleteFromCart(el) {
        let hardCopy = [...book];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setBook(hardCopy);
    }
    
    function handleClick() {
        
    }


// test
    return (
        <div>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <div>{listItems}</div>
            {/*<ul>*/}
            {/*    {data.hits.map(item => (*/}
            {/*        <li key={item.title}>*/}
            {/*            <a href={item.url}>{item.title}</a>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <br/><br/>
            <h5>Shopping Cart</h5>
            <div>
                {cartItems}
                <br/><br/>
                <div><b>Subtotal:</b> ${subTotal}</div>
                <div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to='/checkout'>
                            
                            <button className="btn btn-primary" type="button">Proceed to Checkout</button>
                        
                        
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
    
    
}

export default ShoppingCart;