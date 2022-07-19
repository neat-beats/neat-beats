import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import { UserContext, LangContext } from './sharedData';
import Navbar from './Navbar';
import Home from './pages/Home';
import Message from './pages/Message';
import Help from './pages/Help';
import Login from './pages/Login';
import english from "./images/english.webp";
import portuguese from "./images/portuguese.png";

export default function App() {
  const [user, setUser] = useState("");
  const [lang, setLang] = useState(0);

  const dict = {
    flag: [english, portuguese],
  };

  return (
    <div className="app">
      <UserContext.Provider value={[user, setUser]}>
      <LangContext.Provider value={lang}>
        <img id="lang-flag" src={dict.flag[lang]} width="40px" height="30px" />
        <select name="language" id="language" onChange={(e) => setLang(e.target.value)}>
          <option value={0}>English</option>
          <option value={1}>Português</option>
        </select>
        {user ? 
          <>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/message">
                <Message />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
              <Route path="/access">
                <Redirect to="/" />
              </Route>
            </Switch>
          </>
          :
          <>
            <Redirect to="/access/sign-in" />
            <Login />
          </>
        }
      </LangContext.Provider>
      </UserContext.Provider>
    </div>
    
  );
}