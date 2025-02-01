import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donation = () => {
  const [donorType, setDonorType] = useState('individual');

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Donation Page</h1>
        <form>
          <label>
            Donor Type:
            <select value={donorType} onChange={(e) => setDonorType(e.target.value)}>
              <option value="individual">Individual</option>
              <option value="company">Company</option>
            </select>
          </label>
          {/* Add more form fields based on donor type */}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Donation;