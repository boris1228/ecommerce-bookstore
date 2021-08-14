import "../css/OrderDetails.css";
import useFetch from "../Component/useFetch";
import { useParams } from "react-router-dom";
import Detail from "../Component/Detail";

const OrderDetails = () => {

    const id = useParams().id;
    console.log(id);

    const { data: order, orderIsPending, orderError } = useFetch("https://afternoon-caverns-41327.herokuapp.com/order/" + id);

    return (
        <div className="order-details">
            {orderIsPending && <p>Loading...</p>}
            {orderError && <p>{orderError}</p>}
            {order && <Detail order={order}/>}
        </div>
    );
}

export default OrderDetails;