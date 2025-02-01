import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Membership from './pages/BecomeAMember';
import Appreciation from './pages/Appreciation';
import Misusers from './pages/Misusers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/become-a-member" element={<Membership />} />
        <Route path="/appreciation" element={<Appreciation />} />
        <Route path="/misusers" element={<Misusers />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;