import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul>
                <img src="https://shpe.org/wp-content/uploads/2022/06/shpe-logo.png" alt="SHPE Logo" /> 
                <li><Link to="/">Home</Link></li>
                <li>Language</li>
                <li>Culture</li>
                <li>Profile</li>
            </ul>
        </>
    );
}

export default Header;