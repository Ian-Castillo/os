import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Sidebar from './components/Sidebar';
//about pages
import Home from './pages/about/Home';
import Thoughts from './pages/about/Thoughts.js'; 
import Concepts from './pages/about/Concepts.js';
//project pages
import Daydrink from './pages/projects/Daydrink.js';
import Sunny from './pages/projects/Sunny.js';
import SPL from './pages/projects/SpacePirateLabs.js';
import TimeMachine from './pages/projects/TimeMachine.js';
//resource pages
import Library from './pages/resources/Library'; 
import Tools from './pages/resources/Tools.js'
import Highlights from './pages/resources/Highlights.js';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/sunny" element={<Sunny />} />
            <Route path="/Daydrink" element={<Daydrink />} />

            <Route path="/TimeMachine" element={<TimeMachine />} />
            <Route path="/SpacePirateLabs" element={<SPL />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/library" element={<Library />} />
            <Route path="/highlights" element={<Highlights />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;