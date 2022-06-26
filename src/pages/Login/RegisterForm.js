import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [vpassword, setVPassword] = useState("");

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

    const handleVPasswordChange = (event) => {
        setVPassword(event.target.value);
    }

    return (
        <div className="registerform">
            <form onSubmit={handleSubmit}>
                <label>New Username:<br />
                    <input required type="text" name="username" placeholder="username123" onChange={handleUsernameChange} />
                </label>
                <label>New Password:<br />
                    <input required type="password" name="password" placeholder="••••••••••••••••••" onChange={handlePasswordChange} />
                </label>
                <label>Verify New Password:<br />
                    <input required type="password" name="vpassword" placeholder="••••••••••••••••••" onChange={handleVPasswordChange} />
                </label>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/access/sign-in" className="Link">Sign in here</Link></p>
        </div>
        
    );
}

export default RegisterForm;