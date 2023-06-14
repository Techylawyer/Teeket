import React from 'react';
import Image1 from '../imgs/footerimgs/Image1.jpg';

// import img2 from '../imgs/footerimgs/img2.jpg';
// import img3 from '../imgs/footerimgs/img3.jpg';
// import image4 from '../imgs/footerimgs/image4.jpg';
// import img5 from '../imgs/footerimgs/img5.jpg';

import {useNavigate} from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
      <div className='pt-12' style={{ backgroundColor: '#001133' }}>
        <div className='pt-12 bg-gradient-to-tr from-blue-700 to-pink-800 rounded-lg pb-24 w-100 mx-4'>
        <section>
          <div className='flex flex-row justify-center'>
            <img src={Image1} alt='img1' className='md:w-32 w-24 md:h-32 h-16 rounded-lg '/>
            <div className='bg-pink-800 rounded-lg md:mx-6 mx-2' style={{height: 30, alignContent: 'center'}}>
          <button type="submit" className="text-white block md:text-lg text-sm flex items-center justify-center block md:w-24 w-16 py-2 px-2" >
            #Secure
          </button>
            </div>
          </div>
        </section>
          <div>
        <h1 className='md:text-2xl text-lg text-white flex justify-center mx-2' style={{ marginTop: 10}}>Don't take our word for it</h1>
        <h2 className='md:text-lg text-sm text-white flex justify-center mx-2' >Great news! Teeket allows you connect with</h2>
        <h2 className='md:text-lg text-sm text-white flex justify-center mx-2' >other attendees at no cost.</h2>
          </div>
          <div className=' flex justify-center items-center py-8'>
          <button 
          onClick={() => navigate('/EventListing')}
          style={{backgroundColor: 'white'}}
           type="submit" className="text-blue-500 block text-bold md:text-xl text-lg flex items-center justify-center block rounded-lg md:h-14 h-12 md:w-1/4 w-1/2 py-6 px-6">
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
