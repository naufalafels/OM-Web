import React from 'react';
import { link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
            <link to='/' className='text-white text-lg font-bold'>Overseas Malaysian</link>
            <div className='space-x-4'>
                <link to='/donation' className='text-white'>Donation</link>
                <link to='/become-a-member' className='text-white'>Membership</link>
                <link to='/appreciation' className='text-white'>Appreciation</link>
                <link to='/misusers' className='text-white'>Misusers</link> 
            </div>
        </div>
    </nav>
  );
};

export default Navbar