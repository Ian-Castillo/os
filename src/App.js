import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Sidebar from './components/Sidebar';
//about pages
import Home from './pages/about/Home';
import Writings from './pages/about/Writings'; 
//project pages
import Sunny from './pages/projects/Sunny';
//resource pages
import Library from './pages/resources/Library'; 
import Tools from './pages/resources/Tools.js'


const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/library" element={<Library />} />
            <Route path="/sunny" element={<Sunny />} />
            <Route path="/tools" element={<Tools />} />
            {/* Define more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
