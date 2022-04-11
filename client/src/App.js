import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import AddMeeting from './components/AddMeeting';
import Teams from './components/Teams';

import React from "react";


export default function App() {
  return (
    <div className="App">

    <h1>Welcome to Meeting Application!</h1>
    <Teams />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/addmeeting" element={<AddMeeting />} />
    </Routes>
    </div>
  );
}
