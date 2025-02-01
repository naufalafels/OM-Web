import React, { useState } from 'react';

const BecomeAMember = () => {
  const [membershipType, setMembershipType] = useState('monthly');

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Become a Member</h1>
        <form>
          <label>
            Membership Type:
            <select value={membershipType} onChange={(e) => setMembershipType(e.target.value)}>
              <option value="monthly">Monthly (AUD7)</option>
              <option value="annual">Annual (AUD50)</option>
            </select>
          </label>
          {/* Add more form fields based on membership type */}
        </form>
      </div>
    </div>
  );
};

export default BecomeAMember;