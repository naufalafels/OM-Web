import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Misusers = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Misusers Page</h1>
        {/* List of misusers */}
      </div>
      <Footer />
    </div>
  );
};

export default Misusers;