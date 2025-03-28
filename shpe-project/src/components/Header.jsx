import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul>
                <img src="https://shpe.org/wp-content/uploads/2022/06/shpe-logo.png" alt="SHPE Logo" /> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/language">Language</Link></li>
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </>
    );
}

export default Header;