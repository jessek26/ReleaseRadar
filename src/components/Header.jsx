import Nav from "./nav";

function Header () {
    return (
        <header className="app-header">
            <h1 className="logo">Release Radar</h1>
            <Nav />
        </header>
    ); 
}

export default Header;