import './Login/Login.css';
import { Switch, Route } from 'react-router-dom'
import logo from '../images/logo.png'
import SignInForm from './Login/SignInForm'
import RegisterForm from './Login/RegisterForm';

const Login = () => {    
    return (
        <section className="login">
            <div id="login-panel">
                <img src={logo} />
                <h1>NeatBeats</h1>
                <Switch>
                    <Route path="/access/sign-in">
                        <SignInForm />
                    </Route>
                    <Route path="/access/register">
                        <RegisterForm />
                    </Route>
                </Switch>
            </div>
        </section>
    );
}

export default Login;