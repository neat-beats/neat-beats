import './Login.css'
import { useState, useRef, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { users } from '../../sharedData';
import { UserContext, LangContext } from '../../sharedData';

const SignInForm = () => {
    const [user, setUser] = useContext(UserContext);
    const lang = useContext(LangContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameInput = useRef();
    const passwordInput = useRef();

    const dict = {
        giveUsername: ["You must provide a username.", "Você precisa dar um nome de usuário."],
        existUsername: ["This username does not exist.", "Este nome de usuário não existe."],
        givePassword: ["You must provide a password.", "Você precisa dar uma senha."],
        incorrectPassword: ["This password is incorrect.", "Esta senha está incorreta."],
        username: ["Username: ", "Nome de Usuário: "],
        password: ["Password: ", "Senha: "],
        login: ["Login", "Entra"],
        dont: ["Don't have an account? ", "Não tem um usuário? "],
        register: ["Register here", "Registra aqui"],
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "") {
            usernameInput.current.setCustomValidity(dict.giveUsername[lang]);
            usernameInput.current.reportValidity();
        } else if (password === "") {
            passwordInput.current.setCustomValidity(dict.givePassword[lang]);
            passwordInput.current.reportValidity();
        } else if (!users.hasOwnProperty(username)) {
            usernameInput.current.setCustomValidity(dict.existUsername[lang]);
            usernameInput.current.reportValidity();
        } else if (users[username].password !== password) {
            passwordInput.current.setCustomValidity(dict.incorrectPassword[lang]);
            passwordInput.current.reportValidity();
        } else {
            setUser(username);
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        usernameInput.current.setCustomValidity("");
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        passwordInput.current.setCustomValidity("");
    }

    return (
        <div className="signinform">
            <form onSubmit={handleSubmit}>
                <label>{dict.username[lang]}<br />
                    <input type="text" ref={usernameInput} name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>{dict.password[lang]}<br />
                    <input type="password" ref={passwordInput} name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <input type="submit" value={dict.login[lang]} />
            </form>
            <p>{dict.dont[lang]}<Link to="/access/register" className="Link">{dict.register[lang]}</Link></p>
        </div>
        
    );
}

export default SignInForm;