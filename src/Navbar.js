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
        search: ["Song/Group search", "Procura Música/Groupo"],
        messages: ["Messages", "Mensagens"],
        help: ["Help", "Ajuda"],
        signout: ["Logout", "Sai Do Usuário"],
    };

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
                    <Search submit={handleSubmit} placeholder={dict.search[lang]}
                        style={{fontSize: "17px", height:"35px", width:"200px", borderRadius: "25px", 
                        paddingLeft: "10px", border: "none"}}
                    />
                </li>
                <li className="left">
                    <Link to="/message" className="link">{dict.messages[lang]}</Link>
                </li>
                <li className="left">
                    <Link to="/help" className="link">{dict.help[lang]}</Link>
                </li>

                <li className="right">
                    <Link onClick={() => setUser("")} className="link">{dict.signout[lang]}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;