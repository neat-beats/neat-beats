import './Login.css'
import { useState, useRef, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { users } from '../../sharedData';
import { UserContext } from '../../sharedData';

const SignInForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameInput = useRef();
    const passwordInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "") {
            usernameInput.current.setCustomValidity("You must provide a username.");
            usernameInput.current.reportValidity();
        } else if (password === "") {
            passwordInput.current.setCustomValidity("You must provide a password.");
            passwordInput.current.reportValidity();
        } else if (!users.hasOwnProperty(username)) {
            usernameInput.current.setCustomValidity("This username does not exist.");
            usernameInput.current.reportValidity();
        } else if (users[username].password !== password) {
            passwordInput.current.setCustomValidity("This password is incorrect.");
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
                <label>Username:<br />
                    <input type="text" ref={usernameInput} name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>Password:<br />
                    <input type="password" ref={passwordInput} name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have an account? <Link to="/access/register" className="Link">Register here</Link></p>
        </div>
        
    );
}

export default SignInForm;