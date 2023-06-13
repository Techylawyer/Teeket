import React from 'react';
import TeeketLogo from '../imgs/TeeketLogo.png';
import Homepageslider from './Homepageslider';
import Features from './Features';
import PhoneScreen from './Routes/PhoneScreen';
import BackgroundImage from "../imgs/BackGroundImage.jpg"



function Home() {
  return (
    <div>
      <header className='flex items-center justify-between mx-2'>
        <img className='md:h-14 md:w-20 h-10 w-16' src={TeeketLogo} alt='teeketLogo' />
        <button className='md:bg-green-300 bg-blue-500 text-white md:p-4 p-2 rounded-lg'
        style={{ backgroundColor: '#001133' }}>
        Menu</button>
      </header>
            <section className="relative" style={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
        <div
          className="absolute inset-0 bg-blue-900 opacity-80"
          style={{ zIndex: -1 , borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            zIndex: -2,
            filter: 'brightness(50%)', // Adjust the brightness value (0-100) to make the image darker or lighter
            borderBottomLeftRadius: 30, borderBottomRightRadius: 30
          }}
        />
        <div className='mx-2 mt-6 pt-12 text-center'>
          <p className='md:text-4xl text-lg text-white font-bold'> Struggling to sell</p>
          <p className='md:text-4xl text-lg text-white font-bold'> tickets?</p>
          <p className='md:text-xl text-sm text-white mt-4'> Create events and sell tickets in minutes - at no cost</p>
          <p className='md:text-xl text-sm text-white '> - with the only event platform you need</p>
        </div>
        <div className='mx-12 pb-12'>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 block md:text-xl text-lg rounded-lg md:h-14 h-12 w-full mx-auto my-8">
            Create an event
          </button>
        </div>
      </section>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='text-center md:text-4xl text-xl font-bold'>Empowering event creators </h1>
        <h1 className='text-center md:text-4xl text-xl font-bold'>everywhere</h1>
        <p className='text-center md:text-lg text-sm font-semibold'>More than 1 million people across 5 continents </p>
        <p className='text-center md:text-lg text-sm font-semibold'>choose teeket</p>
      </div>
      <div className='mb-4'>
        <Homepageslider/>
      </div>
        <div className='mb-4 mt-4'>
        <Homepageslider/>
      </div>
      <div className='mt-12'>
        <Features/>
      </div>
      <div className='px-2 ' style={{backgroundColor: '#D0DBF1', paddingTop: 30}}>
        <h1 className='text-center md:text-xl text-lg  font-bold mb-8' style={{marginBottom: 10}}>Do more with the Teeket App</h1>
        <p className='text-center md:text-lg text-sm '>Organise events like a pro with our easy to</p>
        <p className='text-center md:text-lg text-sm '>use <span className='text-[#0052F6] text-sm'>Ticket App</span> featuring tools like check in,</p>
        <p className='text-center md:text-lg text-sm '>curated guestlists, marketing tools and</p>
        <p className='text-center md:text-lg text-sm '>much more</p>

      </div>
      <PhoneScreen/>
    </div>
  );
}

export default Home;
