const Detail = ({order}) => {
    return ( 
        <div className="Detail">
            <img src={order.bookimg} alt="book" />
            <h3>Order Summary</h3>
            <div className="title">
                <p>Order Number: </p>
                <p>Order Date: </p>
                <p>Order Status: </p>
                <p>Grand Total: </p>
                <p>Shipping Address: </p>
                <p>Billing Address: </p>
            </div>
            <div className="details">
                <p>{order.order_id}</p>
                <p>{order.order_date}</p>
                <p>{order.order_status}</p>
                <p>${order.total_price}</p>
                <p>{order.shipping_address}</p>
                <p>{order.billing_address}</p>
            </div>
            <div className="choice">
                <button>Cancel This Order</button>
                <button>Start a Return</button>
            </div>
        </div>
     );
}
 
export default Detail;