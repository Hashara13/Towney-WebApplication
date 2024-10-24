import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import FindCrew from './pages/FindCrew';
import LogIn from './components/layout/LogIn';
import SignUp from './components/layout/SignUp';
import AboutUs from './pages/AboutUs';
import LandingPage from './pages/LandingPage';
import CreateProfile from './components/specific/CreateProfile';
import NewProfile from './components/CrewProfile/NewProfile';
import AddRates from './components/CrewProfile/AddRates';
import CrewProfile from './pages/CrewProfile';
import NewGroup from './components/CrewProfile/NewGroup';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/network" element={<FindCrew />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/portfolio" element={<AboutUs />} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/create" element={<CreateProfile />} />
          <Route path="/create/new" element={<NewProfile />} />
          <Route path="/create/rates" element={<AddRates />} />
          <Route path="/profile/:id" element={<CrewProfile />} />
          <Route path="/create/group" element={<NewGroup />} />

          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
