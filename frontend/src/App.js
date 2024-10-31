import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import FindCrew from './pages/FindCrew';
import FindWorks from './pages/FindWorks';
import LogIn from './components/layout/LogIn';
import SignUp from './components/layout/SignUp';
import AboutUs from './pages/AboutUs';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import CreateProfile from './components/specific/CreateProfile';
import NewProfile from './components/CrewProfile/NewProfile';
import AddRates from './components/CrewProfile/AddRates';
import CrewProfile from './pages/CrewProfile';
import NewGroup from './components/CrewProfile/NewGroup';
import ViewGroups from './components/specific/ViewGroups';
import FindGroups from './pages/FindGroups';
import ViewScripts from './components/specific/ViewScripts';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/network" element={<FindCrew />} />
          <Route path="/groups" element={<FindGroups />} />
          <Route path="/scripts" element={<FindWorks />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/portfolio" element={<AboutUs />} />
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/create" element={<CreateProfile />} />
          <Route path="/create/new" element={<NewProfile />} />
          <Route path="/create/rates" element={<AddRates />} />
          <Route path="/profile/:id" element={<CrewProfile />} />
          <Route path="/create/group" element={<NewGroup />} />
          <Route path="/view/groups" element={<ViewGroups />} />
          <Route path="/jobs" element={<ViewScripts />} />



          


        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
