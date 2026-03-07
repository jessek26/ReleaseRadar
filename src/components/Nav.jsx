import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Nav() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <nav className="navbar">
            {isAuthenticated ? (
                <>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/saved-drops" className="nav-link">Saved Drops</Link>
                    <button onClick={handleLogout} className="nav-link logout-btn">
                        Logout
                    </button>
                </>
            ) : (
                <Link to="/login" className="nav-link">Login</Link>
            )}
        </nav>
    );
}

export default Nav;