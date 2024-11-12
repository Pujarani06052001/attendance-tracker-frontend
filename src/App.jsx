// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import ClassList from './components/ClassList';
import ClassManager from './components/ClassManager';
import ClassForm from './components/ClassForm';

function App() {
  return (
    <Router>      
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/ClassList' element={<ClassList/>}/>
          <Route path='/ClassForm' element={<ClassForm/>}/>
          <Route path='/ClassManager' element={<ClassManager/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
