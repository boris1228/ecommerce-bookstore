import "../css/OrderList.css"
import SingleOrder from "../components/SingleOrder";

const OrderList = () => {
    return ( 
        <div className="order-list">
            <h2>Your Orders</h2>
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
            <SingleOrder />
        </div>
     );
}
 
export default OrderList;