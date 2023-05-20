import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import Workouts from './pages/workouts/Workouts';
import Chest from './pages/chest/Chest';
import Back from './pages/back/Back';
import Arms from './pages/arms/Arms';
import Shoulders from './pages/shoulders/Shoulders';
import Legs from './pages/legs/Legs';
import About from './pages/about/About';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/workouts" exact Component={Workouts} />
          <Route path="/chest" exact Component={Chest} />
          <Route path="/back" exact Component={Back} />
          <Route path="/arms" exact Component={Arms} />
          <Route path="/shoulders" exact Component={Shoulders} />
          <Route path="/legs" exact Component={Legs} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
