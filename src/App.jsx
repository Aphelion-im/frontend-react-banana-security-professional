// Installeren: Axios, jwt-decode, react-router-dom
// Installeren: https://github.com/hogeschoolnovi/frontend-fake-server
// npm run json:server --> geeft op http://localhost:3000 een lokale JSON server

// Aantekeningen code: 
// React-router-dom v5 --> react-router-dom v6:
// v5 Switch --> v6 Routes
// v5 Redirect --> v6 Navigate
// exact keyword weglaten uit path. Niet meer nodig in v6.
// v5 useHistory --> v6 useNavigate
// v5 history.push('/'); --> v6 navigate('/');

// Algemene aantekeningen:
// Password moet lang genoeg zijn, anders krijg je een 400 bad request error van de JSON server
// Eerst de JSON server opstarten, dan pas de React app
// 2x inloggen kan

import React, { useContext } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/profile">
            {isAuth ? <Profile /> : <Redirect to="/" />}
          </Route> */}
          <Route
            path="/profile"
            element={isAuth ? <Profile /> : <Navigate to="/login" />}
          />

          {/* 
          <Route exact path="/signin">
            <SignIn />
          </Route> */}
          <Route path="/signin" element={<SignIn />} />

          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
