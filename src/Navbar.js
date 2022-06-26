import './Navbar.css';

import { Link } from "react-router-dom";
import Search from "./components/Search"
import logo from "./images/logo.png";

const Navbar = () => {
    const handleSubmit = (search) => {
        alert(search);
    }

    return (
        <nav>
            <ul>
                <li id="logo">
                    <Link to="/" className="link">
                        <img 
                            src={logo} alt="logo"
                        />
                    </Link>
                </li>
                <li className="left search">
                    <Search submit={handleSubmit} placeholder="Public Search..."
                        style={{fontSize: "15px", height:"25px", width:"200px", borderRadius: "25px", 
                        paddingLeft: "10px", marginTop: "5px", border: "none"}}
                    />
                </li>
                <li className="left">
                    <Link to="/explore" className="link">Explore</Link>
                </li>
                <li className="left">
                    <Link to="/message" className="link">Message</Link>
                </li>
                <li className="left">
                    <Link to="/help" className="link">Help</Link>
                </li>

                <li className="right">
                    <Link to="/thing" className="link">Thing</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;