import AdminProfile from "./AdminProfile";
import FunctionBar from "./FunctionBar";
import "../css/LeftBar.css";

const LeftBar = () => {
    return ( 
        <div className="left-bar">
            <AdminProfile />
            <FunctionBar />
        </div>
     );
}
 
export default LeftBar;