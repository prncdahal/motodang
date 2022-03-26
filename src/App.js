import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {Navbar,Footer} from './components';


import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Footer/>
    </div>
  );
}

export default App;
