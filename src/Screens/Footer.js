import React from 'react';

function Footer() {
  return (
      <div className='pt-12' style={{ backgroundColor: '#001133' }}>
        <div className='pt-12 bg-gradient-to-tr from-blue-700 to-pink-800 rounded-lg h-72 w-100 mx-4'>

          <div>
        <h1 className='md:text-xl text-lg  font-bold mb-8 mx-2' style={{paddingBottom: 10, marginTop: 10}}>Don't take our word for it</h1>
          </div>
          <div className=' flex justify-center items-center py-8'>
          <button type="submit" className="bg-white text-blue-500 block text-bold md:text-xl text-lg flex items-center justify-center block rounded-lg md:h-14 h-12 md:w-1/4 w-1/2 py-6 px-6">
            Book an event
          </button>
          </div>
        </div>
    <div className="mt-8 text-center text-white">
      Hertechtrail cohort 6 Capstone project
      <p>
        Designed by{' '}
        <span className="font-bold">Team 7</span>
      </p>
    </div>
      </div>
  );
}

export default Footer;
