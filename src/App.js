import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Sidebar from './components/Sidebar';
//about pages
import Home from './pages/about/Home';
import Thoughts from './pages/about/Thoughts.js'; 
import Designs from './pages/about/Designs.js';
import Argus from './pages/designs/Argus';
//project pages
import Daydrink from './pages/projects/Daydrink.js';
import Sunny from './pages/projects/Sunny.js';
import SPL from './pages/projects/SpacePirateLabs.js';
import TimeMachine from './pages/projects/TimeMachine.js';
//resource pages
import Library from './pages/resources/Bookmarks.js'; 
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
            <Route path="/designs" element={<Designs />} />
            <Route path="/designs/argus" element={<Argus />} />
            <Route path="/sunny" element={<Sunny />} />
            <Route path="/Daydrink" element={<Daydrink />} />

            <Route path="/TimeMachine" element={<TimeMachine />} />
            <Route path="/SpacePirateLabs" element={<SPL />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/bookmarks" element={<Library />} />
            <Route path="/highlights" element={<Highlights />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
