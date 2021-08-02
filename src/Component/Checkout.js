import {Table, Button} from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import {useHistory} from 'react-router-dom';

import '../css/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import {getBasketTotal} from './reducer';
import { useStateValue } from './StateProvider';


export default function CheckOut(){
    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory();
    const proceedToCheckout = () =>{
        dispatch({
            type:"EMPTY_BASKET",
        });
        history.push('/');
    }

    return(
        <div className="checkout-container">
            <h3>Hello <span className="text-primary">{user?.email}</span></h3>
            <h2>Your Shopping Cart</h2>
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}                        
                            price={item.price}
                        />
                    ))}
                </tbody>                
            </Table>
            <div>
                <h3 className="text-danger">Total: {
                   <CurrencyFormat value={getBasketTotal(basket)} decimalScale={2} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                }</h3>
                
            </div>
            <Button onClick={proceedToCheckout} variant="warning" block>Check Out</Button>

        </div>
    )
}