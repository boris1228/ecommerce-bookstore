import "../css/OrderList.css"
import { Link } from "react-router-dom";
import useFetch from "../Component/useFetch";
import SingleOrder from "../Component/SingleOrder";
import { useState } from "react";
import { isPending } from "q";

const OrderList = () => {
    const {data: orders, ordersIsPending, ordersError}=useFetch("https://afternoon-caverns-41327.herokuapp.com/orders/customerid/" + 1);

    return (
        <div className="order-list">
            <h2>Your Orders</h2>
            {ordersIsPending && <div>Loading</div>}
            {ordersError && <div>{ordersError}</div>}
            {orders && orders.map((order) => (
                <SingleOrder order={order} />
            ))}
        </div>
    );
}

export default OrderList;