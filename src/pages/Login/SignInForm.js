import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("hi");
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="signinform">
            <form onSubmit={handleSubmit}>
                <label>Username:<br />
                    <input required type="text" name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>Password:<br />
                    <input required type="password" name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <input type="submit" value="Login" />
            </form>
            <p>Don't have an account? <Link to="/register" className="Link">Register here</Link></p>
        </div>
        
    );
}

export default SignInForm;