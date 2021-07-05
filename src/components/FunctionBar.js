import { Link } from "react-router-dom";
import '../css/FunctionBar.css';

const FunctionBar = () => {
    return ( 
        <div className="function-bar">
            <ul>
                <li><Link to="/check">Check</Link></li>
                <li><Link to="/add">Add</Link></li>
                <li><Link to="/modify">Modify</Link></li>
                <li><Link to="/delete">Delete</Link></li>
                <li><Link to="/other1">Other</Link></li>
                <li><Link to="/ohter2">Other</Link></li>
            </ul>
        </div>
     );
}
 
export default FunctionBar;