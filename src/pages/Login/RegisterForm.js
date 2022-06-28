import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, users, groups } from "../../sharedData";

const RegisterForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [vpassword, setVPassword] = useState("");

    const usernameInput = useRef();
    const passwordInput = useRef();
    const vpasswordInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (username === "") {
            usernameInput.current.setCustomValidity("You must provide a username.");
            usernameInput.current.reportValidity();
        } else if (users.hasOwnProperty(username)) {
            usernameInput.current.setCustomValidity("This username is already in use.");
            usernameInput.current.reportValidity();
        } else if (password === "") {
            passwordInput.current.setCustomValidity("You must provide a password.");
            passwordInput.current.reportValidity();
        } else if (vpassword !== password) {
            vpasswordInput.current.setCustomValidity("Does not match the given password.");
            vpasswordInput.current.reportValidity();
        } else {
            const newGroupID = Date.now();
            users[username] = {"password": password, "groups": [newGroupID]};
            groups[newGroupID] = {"name": username, "members": [username], "songs": []};
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
                <label>New Username:<br />
                    <input ref={usernameInput} type="text" name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>New Password:<br />
                    <input ref={passwordInput} type="password" name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <label>Verify New Password:<br />
                    <input ref={vpasswordInput} type="password" name="vpassword" placeholder="••••••••••••••••••" onChange={handleVPasswordChange} />
                </label>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/access/sign-in" className="Link">Sign in here</Link></p>
        </div>
        
    );
}

export default RegisterForm;