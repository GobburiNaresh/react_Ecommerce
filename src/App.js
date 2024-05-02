import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StorePage from './Components/Pages/StorePage';
import HomePage from './Components/Pages/HomePage';
import ContactPage from './Components/Pages/ContactPage';
function App() {
 
  return (
      <Router>
        <Routes>
          <Route path="/Home" element={<HomePage/>}/>
          <Route path="/About"/>
          <Route path="/" element={<StorePage />} />
          <Route path="/contactUs" element={<ContactPage />} />
        </Routes>
      </Router>
  );
}

export default App;
