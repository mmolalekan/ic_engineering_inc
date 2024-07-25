import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './tailwind.css';
import Home from "./pages/Home";

const App = () => {
  return (
    <div className='w-full font-inter text-black'>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;