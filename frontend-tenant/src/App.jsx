import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './componants/sidebar/sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Notification from './pages/Notification';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Sidebar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;