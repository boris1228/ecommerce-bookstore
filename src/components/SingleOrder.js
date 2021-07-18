import "../css/SingleOrder.css";
import book from "../image/book.jpg";
import { Row, Col } from "react-bootstrap";

const SingleOrder = () => {
    return (
        <div className="single-order">
            <Row className="summary">
                <Col md={6}><img src={book} className="book-image" alt="book" /></Col>
                <Col md={6} className="text-black" >
                    <p>Order Number:1234455</p>
                    <p>Product Name: Harry Potter</p>
                    <p>Return eligible through: August 04, 2021</p>
                </Col>
            </Row>
        </div >
    );
}

export default SingleOrder;