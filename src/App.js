import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Sidebar from './components/Sidebar';
//about pages
import Home from './pages/about/Home';
import Thoughts from './pages/about/Thoughts.js'; 
//project pages
import Gradient from './pages/projects/gradient.js';
import Sunny from './pages/projects/Sunny';
//resource pages
import Library from './pages/resources/Library'; 
import Tools from './pages/resources/Tools.js'
import Concepts from './pages/about/Concepts.js';

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
            <Route path="/gradient" element={<Gradient />} />

            <Route path="/sunny" element={<Sunny />} />
           
            <Route path="/tools" element={<Tools />} />
            <Route path="/library" element={<Library />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
