import SearchBox from "./SearchBox";
import DisplayPanel from "./DisplayPanel";
import "../css/Dashboard.css";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <SearchBox />
            <DisplayPanel />
        </div>
     );
}
 
export default Dashboard;