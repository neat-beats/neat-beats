import './Navbar.css';

import { Link } from "react-router-dom";
import { useContext } from 'react';
import Search from "./components/Search"
import logo from "./images/logo.png";
import { UserContext } from './sharedData';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);

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
                    <Search submit={handleSubmit} placeholder="Song/Group search"
                        style={{fontSize: "17px", height:"35px", width:"200px", borderRadius: "25px", 
                        paddingLeft: "10px", border: "none"}}
                    />
                </li>
                <li className="left">
                    <Link to="/message" className="link">Messages</Link>
                </li>
                <li className="left">
                    <Link to="/help" className="link">Help</Link>
                </li>

                <li className="right">
                    <Link onClick={() => setUser("")} className="link">Sign Out</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;