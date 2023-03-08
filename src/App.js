//routing for all components
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './Components/Citizen/Home';
import CitizenLogin from './Components/Citizen/CitizenLogin';
import Profile from './Components/Citizen/Profile';
import CitizenSignup from './Components/Citizen/CitizenSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/citizenlogin" element={<CitizenLogin/>} />
        <Route exact path="/citizensignup" element={<CitizenSignup />} />
        <Route exact path="/citizenprofile" element={<Profile />} />
       
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;