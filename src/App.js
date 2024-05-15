import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Writings from './pages/Writings';  // Make sure this is correctly pointing to the Writings component file
import Bookmarks from './pages/Library';
import Sunny from './pages/projects/Sunny';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/library" element={<Bookmarks />} />
            <Route path="/sunny" element={<Sunny />} /> 

            {/* Define more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
