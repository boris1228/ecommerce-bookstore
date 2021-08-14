import "../css/SingleOrder.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleOrder = ({ order }) => {
    return (
        <div className="single-order">
            <Link to={"./orderdetails/" + order.order_id}>
                <Row className="summary">
                    <Col md={6}><img src={order.bookimg} className="book-image" alt="book" /></Col>
                    <Col md={6} className="text-black" >
                        <p>Order Number: {order.order_id}</p>
                        <p>Shipping Address: {order.shipping_address}</p>
                        <p>Price: {order.total_price}</p>
                    </Col>
                </Row>
            </Link>

        </div >
    );
}

export default SingleOrder;