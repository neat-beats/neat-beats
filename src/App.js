import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from 'react';
import { UserContext, LangContext } from './sharedData';
import Navbar from './Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Message from './pages/Message';
import Help from './pages/Help';
import Login from './pages/Login';

export default function App() {
  const [user, setUser] = useState("");
  const [lang, setLang] = useState(0);

  return (
    <div className="app">
      <UserContext.Provider value={[user, setUser]}>
      <LangContext.Provider value={[lang, setLang]}>
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