import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/CoinDetails/:id" element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
