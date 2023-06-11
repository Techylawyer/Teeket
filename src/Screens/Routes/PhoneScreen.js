import React from 'react';
import Full_Frame from '../../imgs/Full_Frame.png'
import BottomScrollList from './BottomScrollList';
import Footer from '../Footer';

function PhoneScreen() {
  return (
    <div className='pt-16' style={{backgroundColor: '#D0DBF1', flexDirection: 'column'}}>
      {/* <img src={Phone_Frame} alt='Phone_Frame' className='md:w-80 md:h-96 w-40 h-60' style={{ zIndex: 0 }} />
      <div>
        <img
          src={Phone_background}
          alt='Phone_background'
          className='md:h-96 md:w-80 w-40 h-80'
          style={{ zIndex: 2 ,position: "absolute",  right: 160,  }}
        />
      </div> */}
    <div className='flex justify-center items-center' style={{backgroundColor: '#D0DBF1', flexDirection: 'column'}}>
         <img src={Full_Frame} alt='Full_Frame' className='md:w-full w-80'/>
        <h1 className='text-center md:text-lg font-bold mb-8 text-[#0052F6] text-sm'>That's not all</h1>
        <p className='text-center md:text-lg text-sm '>Get 30 days free access to promotions by </p>
        <p className='text-center md:text-lg text-sm '>our partners to attract more attendees </p>
        <p className='text-center md:text-lg text-sm '>and boost ticket sales for your events </p>
     </div>
        <h1 className='md:text-xl text-lg  font-bold mb-8 mx-2' style={{paddingBottom: 10, marginTop: 10}}>Don't take our word for it</h1>
        <BottomScrollList/>
         <Footer/>
    </div>
  );
}

export default PhoneScreen;
