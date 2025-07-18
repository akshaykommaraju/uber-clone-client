
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;