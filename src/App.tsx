import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Navbar />
      <Switch>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}/>
      </Switch>
    </div>
    </BrowserRouter>
  )
}


export default App
