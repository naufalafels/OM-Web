import React, { useState } from 'react';

const Donation = () => {
  const [donorType, setDonorType] = useState('individual');

  return (
    <div>
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
    </div>
  );
};

export default Donation;