import './App.css';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>  
  </Router>
  );
}

export default App;
