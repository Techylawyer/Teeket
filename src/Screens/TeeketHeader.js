import React from 'react';
import { useState } from 'react';
import TeeketLogo from '../imgs/TeeketLogo.png';

const TeeketHeader = () => {
      const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuOptionClick = (option) => {
    // Handle click event for each menu option
    console.log(`Clicked ${option}`);
  };

  return (
    <div>
          <header className='flex items-center justify-between mx-2 mt-2'>
      <img className='md:h-14 md:w-20 h-10 w-16' src={TeeketLogo} alt='teeketLogo' />
      <div className='relative inline-block'>
        <button
          className='md:bg-green-300 bg-blue-500 text-white md:p-4 p-2 rounded-lg'
          style={{ backgroundColor: '#001133' }}
          onClick={handleMenuToggle}
        >
          Menu
        </button>
        {isOpen && (
          <div className='absolute right-0 mt-2 bg-white rounded shadow-md'>
            <ul className='py-1'>
              <li>
                <button className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleMenuOptionClick('HomePage')}>
                  HomePage
                </button>
              </li>
              <li>
                <button className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleMenuOptionClick('AttendeesPage')}>
                  AttendeesPage
                </button>
              </li>
              <li>
                <button className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={() => handleMenuOptionClick('LandingPage')}>
                  LandingPage
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
    </div>
  )
}

export default TeeketHeader;

