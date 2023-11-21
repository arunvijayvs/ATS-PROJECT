import React from 'react'
import './App.css';
import Signuppage from './Components/signup';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/signup" element={<Signuppage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </Router>
  );
  }
export default App;