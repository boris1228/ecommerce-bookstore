import avatar from '../image/blank-avatar.png';
import '../css/AdminProfile.css';

const AdminProfile = () => {
    return (
        <div className="admin-profile">
            <div className="img">
                <img src={avatar} className="avatar" alt="avatar" />
            </div>
            <div className="p">
                <p className="admin-name">Name: Admin</p>
                <p className="authority">Authority: Highest</p>
            </div>
        </div>
    );
}

export default AdminProfile;