import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to='/' className='text-white text-lg font-bold'>Overseas Malaysian</Link>
            <div className='space-x-4'>
                <Link to='/donation' className='text-white'>Donation</Link>
                <Link to='/become-a-member' className='text-white'>Membership</Link>
                <Link to='/appreciation' className='text-white'>Appreciation</Link>
                <Link to='/misusers' className='text-white'>Misusers</Link> 
            </div>
        </div>
    </nav>
  );
};

export default Navbar