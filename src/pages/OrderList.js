import "../css/OrderList.css"
import { Link } from "react-router-dom";
import useFetch from "../Component/useFetch";
import SingleOrder from "../Component/SingleOrder";

const OrderList = () => {

    const { data: orders, orderIsPending, orderError } = useFetch("https://afternoon-caverns-41327.herokuapp.com/orders/customerid/" + 1);
    console.log(orders);

    return (
        <div className="order-list">
            <h2>Your Orders</h2>
            {orders.map((order) => (
                <Link to="./orderdetails"><SingleOrder order={order} /></Link>
            ))}
        </div>
    );
}

export default OrderList;