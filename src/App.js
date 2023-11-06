import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import the new components

import Navbar from './components/Navbar';
import {
   Home,
   Hero,
   Slot,
   PillEntry,
   ViewPills
 } from './Pages';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Hero />} />
          <Route path="/pill-entry" element={<PillEntry />} />
          <Route path="/slot" element={<Slot />} />
          <Route path="/view-pills" element={<ViewPills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
