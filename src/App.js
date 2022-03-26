import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
