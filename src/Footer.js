import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer" style={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <div className="links" style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '80px' }}>Home</Link>
        <Link to="/games" style={{ marginRight: '80px' }}>Games</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <h4>Email: contact@gamesword.com &emsp; Phone: +1 (555) 123-4567</h4>
      <p>© {new Date().getFullYear()} GameSword. All rights reserved.
        This statement indicates that GameSword holds the copyright for all content and materials on the website
        and that unauthorized use or reproduction of any content is prohibited. </p>
    </div>
  );
}

export default Footer;
