import './Navbar.css';

import { Link } from "react-router-dom";
import { useContext } from 'react';
import Search from "./components/Search"
import logo from "./images/logo.png";
import { UserContext, LangContext } from './sharedData';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const lang = useContext(LangContext);

    const dict = {
        search: ["Group search", "Procura Grupo"],
        messages: ["Messages", "Mensagems"],
        help: ["Help", "Ajuda"],
        signout: ["Logout", "Sai Do Usuário"],
    };

    const handleSubmit = (search) => {
        alert("I couldn't finish this.");
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
                    <Search submit={handleSubmit} placeholder={dict.search[lang]}
                        style={{fontSize: "17px", height:"35px", width:"200px", borderRadius: "25px", 
                        paddingLeft: "10px", border: "none"}}
                    />
                </li>
                <li className="left">
                    <Link to="/messages" className="link">{dict.messages[lang]}</Link>
                </li>
                <li className="left">
                    <Link to="/help" className="link">{dict.help[lang]}</Link>
                </li>

                <li className="right">
                    <Link to="/" onClick={() => setUser("")} className="link">{dict.signout[lang]}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;