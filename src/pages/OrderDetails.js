import "../css/OrderDetails.css";
import book from "../image/book.jpg";

const OrderDetails = () => {
    return ( 
        <div className="order-details">
            <img src={book} alt="book" />
            <h3>Order Summary</h3>
            <div className="title">
                <p>Order Status: </p>
                <p>Order Number: </p>
                <p>Item(s) Subtotal: </p>
                <p>Shipping & Handeling: </p>
                <p>Total before tax: </p>
                <p>Estimated GST/HST: </p>
                <p>Grand Total: </p>
            </div>
            <div className="details">
                <p>Delivered</p>
                <p>123445566</p>
                <p>$300.00</p>
                <p>$0.00</p>
                <p>$300.00</p>
                <p>$39.00</p>
                <p>$339.00</p>
            </div>
            <div className="choice">
                <button>Cancel This Order</button>
                <button>Start a Return</button>
            </div>
        </div>
     );
}
 
export default OrderDetails;