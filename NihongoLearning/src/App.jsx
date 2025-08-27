import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FlashcardAlarm from "./components/FlashcardAlarm"
import HiraganaChart from "./components/HiraganaChart";
import PlacementTest from './components/PlacementTest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hiragana" element={<HiraganaChart />} />
          <Route path="/flashcardAlarm" element={<FlashcardAlarm />}/>
          <Route path="/placement-test" element={<PlacementTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
