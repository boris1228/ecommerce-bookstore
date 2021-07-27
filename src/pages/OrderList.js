import "../css/OrderList.css"
import SingleOrder from "../components/SingleOrder";
import { Link } from "react-router-dom";

const OrderList = () => {
    return (
        <div className="order-list">
            <h2>Your Orders</h2>
            <Link to="./orderdetails"><SingleOrder /></Link>
        </div>
    );
}

export default OrderList;