import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, LangContext, users, groups } from "../../sharedData";

const RegisterForm = () => {
    const [user, setUser] = useContext(UserContext);
    const lang = useContext(LangContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [vpassword, setVPassword] = useState("");

    const usernameInput = useRef();
    const passwordInput = useRef();
    const vpasswordInput = useRef();

    const dict = {
        giveUsername: ["You must provide a username.", "Você precisa dar um nome de usuário."],
        usedUsername: ["This username is already in use.", "Este nome de usuário já está sendo usado."],
        givePassword: ["You must provide a password.", "Você precisa dar uma senha."],
        matchPassword: ["Does not match the given password.", "Não corresponde à senha dada."],
        newUsername: ["New Username: ", "Novo Nome de Usuário: "],
        newPassword: ["New Password: ", "Nova Senha: "],
        verifyNewPassword: ["Verify New Password: ", "Verifica Nova Senha: "],
        register: ["Register", "Registra"],
        already: ["Already have an account? ", "Já tem um usuário? "],
        signin: ["Sign in here", "Entra aqui"],
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (username === "") {
            usernameInput.current.setCustomValidity(dict.giveUsername[lang]);
            usernameInput.current.reportValidity();
        } else if (users.hasOwnProperty(username)) {
            usernameInput.current.setCustomValidity(dict.usedUsername[lang]);
            usernameInput.current.reportValidity();
        } else if (password === "") {
            passwordInput.current.setCustomValidity(dict.givePassword[lang]);
            passwordInput.current.reportValidity();
        } else if (vpassword !== password) {
            vpasswordInput.current.setCustomValidity(dict.matchPassword[lang]);
            vpasswordInput.current.reportValidity();
        } else {
            const newGroupID = Date.now();
            users[username] = {password: password, groups: [newGroupID]};
            groups[newGroupID] = {name: username, members: [username], songs: [], messages: []};
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

    const handleVPasswordChange = (event) => {
        setVPassword(event.target.value);
        vpasswordInput.current.setCustomValidity("");
    }

    return (
        <div className="registerform">
            <form onSubmit={handleSubmit}>
                <label>{dict.newUsername[lang]}<br />
                    <input ref={usernameInput} type="text" name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>{dict.newPassword[lang]}<br />
                    <input ref={passwordInput} type="password" name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <label>{dict.verifyNewPassword[lang]}<br />
                    <input ref={vpasswordInput} type="password" name="vpassword" placeholder="••••••••••••••••••" onChange={handleVPasswordChange} />
                </label>
                <input type="submit" value={dict.register[lang]} />
            </form>
            <p>{dict.already[lang]}<Link to="/access/sign-in" className="Link">{dict.signin[lang]}</Link></p>
        </div>
        
    );
}

export default RegisterForm;