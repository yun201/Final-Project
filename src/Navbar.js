import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar" style={navbarStyle}>
            <div style={logoContainerStyle}>
                <img src={logo} width={70} height={70} alt="Logo" style={logoStyle} />
                <h1 style={titleStyle}>GameSword</h1>
            </div>
            <div className="links" style={linksStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/games" style={linkStyle}>Games</Link>
                <Link to="/contact" style={linkStyle}>Contact Us</Link>
            </div>
        </nav>
    );
}

const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
};

const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
};

const logoStyle = {
    marginRight: '10px'
};

const titleStyle = {
    marginLeft: '10px',
    fontSize: '1.5em'
};

const linksStyle = {
    display: 'flex',
    gap: '20px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2em'
};

export default Navbar;
