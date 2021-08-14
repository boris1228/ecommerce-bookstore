import "../css/SingleOrder.css";
import { Row, Col } from "react-bootstrap";

const SingleOrder = (order) => {
    return (
        <div className="single-order">
            <Row className="summary">
                <Col md={6}><img src="" className="book-image" alt="book" /></Col>
                <Col md={6} className="text-black" >
                    <p>Order Number: {order.order_id}</p>
                    <p>Product Name: {order.books}</p>
                    <p>Return eligible through: August 04, 2021</p>
                </Col>
            </Row>
        </div >
    );
}

export default SingleOrder;