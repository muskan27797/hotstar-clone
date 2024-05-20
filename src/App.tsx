import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import React from 'react';
import { MovieDetail } from './Components/MovieDetail';

function App() {
  return (
    <div className="App"> 
     <Router>
       <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/detail/:id" element={<MovieDetail/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
