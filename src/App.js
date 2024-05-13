import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Writings from './pages/Writings';  // Make sure this is correctly pointing to the Writings component file
import Bookmarks from './pages/Bookmarks';

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
            {/* Define more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
