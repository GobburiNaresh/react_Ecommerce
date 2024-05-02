import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StorePage from './Components/Pages/StorePage';

function App() {
 
  return (
      <Router>
        <Routes>
          <Route path="/Home"/>
          <Route path="/About"/>
          <Route path="/" element={<StorePage />} />
        </Routes>
      </Router>
  );
}

export default App;
