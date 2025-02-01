import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Overseas Malaysian</h1>
        <p>Our mission and vision...</p>
        {/* Add more sections here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;