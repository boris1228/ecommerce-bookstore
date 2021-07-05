import LeftBar from '../components/LeftBar';
import '../css/Admin.css';
import Dashboard from '../components/Dashboard';

const Body = () => {
    return (
        <div className="body">
                <LeftBar />
                <Dashboard />
        </div>
    );
}

export default Body;