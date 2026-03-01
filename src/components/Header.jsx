import { Link } from 'react-router-dom'; 

function Header () {
    return (
        <header className="app-header">
            <h1 className="logo">Release Radar</h1>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link> 
                <Link to="/saved-drops" className="nav-link">Saved Drops</Link>  
            </nav>
        </header>
    ); 
}

export default Header;