import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './componants/sidebar/sidebar';
import Home from './pages/Home';
import Bills from './pages/Bills';
import About from './pages/About';
import Notification from './pages/Notification';
import Request from './pages/Request';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Sidebar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/request" element={<Request />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;