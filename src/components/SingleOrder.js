import "../css/SingleOrder.css";
import book from "../image/book.jpg";
import { Link } from "react-router-dom";

const SingleOrder = () => {
    return ( 
        <div className="single-order">
            <img src={book} className="book-image" alt="book" />
            <div className="summary">
                <p>Order Number:1234455</p>
                <p>Product Name: Harry Potter</p>
                <p>Return eligible through: August 04, 2021</p>
            </div>
            <Link to="/orderDetails" className="view-details">View Details</Link>
        </div>
     );
}
 
export default SingleOrder;