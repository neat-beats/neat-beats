import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { createContext, useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Message from './pages/Message';
import Help from './pages/Help';
import Login from './pages/Login';

const UserContext = createContext();

export default function App() {
  const [user, setUser] = useState("");

  return (
    <div className="app">
      <UserContext.Provider value={user}>
        {user ? 
          <>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>
              <Route path="/message">
                <Message />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </>
          :
          <>
            <Redirect to="/sign-in" />
            <Login />
          </>
        }
      </UserContext.Provider>
    </div>
    
  );
}