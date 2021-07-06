import LeftBar from '../components/LeftBar';
import '../css/Admin.css';
import Dashboard from '../components/Dashboard';

const Admin = () => {
    return (
        <div className="admin">
                <LeftBar />
                <Dashboard />
        </div>
    );
}

export default Admin;