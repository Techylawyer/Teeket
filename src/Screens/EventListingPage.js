import React from 'react';
import TeeketLogo from '../imgs/TeeketLogo.png';
// import Search from '../imgs/Search.jpg';
import SearchButton from '../imgs/SearchButton.jpg'
import music_note from '../imgs/music_note.png'
import { Data } from './EventListingData';
import location from '../imgs/Location.png'
import Image1 from '../imgs/footerimgs/Image1.jpg'
import { SportData } from './SportEventList';
import Footer from './Footer';
import Sport2 from '../imgs/Sport2.jpg'

function EventListingPage() {
  return (
    <div>
      <header className='flex items-center justify-between mx-2'>
        <img className='md:h-14 md:w-20 h-10 w-16' src={TeeketLogo} alt='teeketLogo' />
        <button
          className='md:bg-green-300 bg-blue-500 text-white md:p-4 p-2 rounded-lg'
          style={{ backgroundColor: '#001133' }}
        >
          Menu
        </button>
      </header>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='md:text-center text-start md:text-4xl text-xl '>Discover events near you </h1>
        <div className='relative w-full flex justify-center items-center mt-8 flex-row gap-4'>
  <section className='flex justify-center'>
    <input
      type='text'
      placeholder='Search all events'
      className='md:w-full w-100 md:h-16 h-8 pr-8 pl-8 rounded-full shadow'
      style={{ paddingLeft: 18, outline: 'none' }}
      // value={searchval}
      // onChange={filterEvents}
    />
  </section>
  <section className='flex justify-center items-center'>
    <img src={SearchButton} alt='searchButton' className='md:w-16 w-8 md:h-16 h-8' />
  </section>
</div>
      </div>
<div className='mt-8 md:mx-6 mx-2 flex flex-grow gap-4'>
    <section className='w-1/2 rounded-lg py-4 px-4' style={{backgroundColor: '#FBBF0A', height: 100}}>
      <img src={music_note} alt='MusicIcon' className='md:w-14 w-8 md:h-10 h-6'/>
      <h2 className='md:text-2xl text-sm pb-6'>Music</h2>
    </section>
        <section className='w-1/2 rounded-lg py-4 px-4' style={{backgroundColor: '#EEEEEE', height: 100}}>
      <img src={music_note} alt='MusicIcon' className='md:w-14 w-8 md:h-10 h-6'/>
      <h2 className='md:text-2xl text-sm pb-6'>Tech</h2>
    </section>
  </div>
  <div className='mt-8 md:mx-6 mx-2 flex flex-grow gap-4'>
    <section className='w-1/2 rounded-lg py-4 px-4' style={{backgroundColor: '#B0E298', height: 100}}>
      <img src={music_note} alt='MusicIcon' className='md:w-14 w-8 md:h-10 h-6'/>
      <h2 className='md:text-2xl text-sm pb-6'>Arts & Culture</h2>
    </section>
        <section className='w-1/2 rounded-lg py-4 px-4' style={{backgroundColor: '#FFC971', height: 100}}>
      <img src={music_note} alt='MusicIcon' className='md:w-14 w-8 md:h-10 h-6'/>
      <h2 className='md:text-2xl text-sm pb-6'>Business</h2>
    </section>
  </div>
  <div className='my-8 mx-4'>
    <h1 className='md:text-center text-start md:text-4xl text-xl text-bold'>Upcoming events </h1>
    <div className='mt-6'>
      {Data.map((item) => (
            <div key={item.id} className='w-full rounded-lg py-4 px-4 flex flex-row justify-between' style={{ backgroundColor: '#DDDDDD', paddingBottom:10, marginBottom: 8}}>
              <section>
                <div>
                <p>
              {item.date}
               <span className='text-red-800 bg-pink-300 inline-block px-4 py-1 rounded' style={{marginLeft: 12}}>
              {item.cost}
              </span>
              </p>
              </div>
              <h2 className='md:text-3xl text-xl text-bold my-4'>{item.title}</h2>
              <div className='flex flex-row gap-4 py-4'>
                <img src={Image1} alt='Pic' className='w-6 h-6'/> <span>{item.covener}</span>
              </div>
              <div className='flex flex-row gap-4'>
                <img src={location} alt='Pic' className='w-6 h-6'/> <span>{item.location}</span>
              </div>
              </section>
              <section >
                <img src={item.img} alt='img'  style={{width: '10em', height: '10em'}}/>
              </section>
            </div>
            
          ))}
    </div>
  </div>
        <div className='mx-4'>
           <button type="submit" className=" px-4 py-2 block md:text-xl text-lg rounded-lg md:h-14 h-12 w-full mx-auto my-8" 
           style={{backgroundColor: '#E1E4EB'}}>
            Discover More
          </button>
        </div>
        <div className='my-8 mx-4'>
    <h1 className='md:text-center text-start md:text-4xl text-xl text-bold'>Sport events </h1>
    <div className='mt-6'>
      {SportData.map((item) => (
            <div key={item.id} className='w-full rounded-lg py-4 px-4 flex flex-row justify-between' style={{ backgroundColor: '#DDDDDD', paddingBottom:10, marginBottom: 8}}>
              <section>
                <div>
                <p>
              {item.date}
               <span className='text-red-800 bg-pink-300 inline-block px-4 py-1 rounded' style={{marginLeft: 12}}>
              {item.cost}
              </span>
              </p>
              </div>
              <h2 className='md:text-3xl text-xl text-bold my-4'>{item.title}</h2>
              <div className='flex flex-row gap-4 py-4'>
                <img src={Sport2} alt='Pic' className='w-6 h-6'/> <span>{item.covener}</span>
              </div>
              <div className='flex flex-row gap-4'>
                <img src={location} alt='Pic' className='w-6 h-6'/> <span>{item.location}</span>
              </div>
              </section>
              <section >
                <img src={item.img} alt='img'  style={{width: '10em', height: '10em'}}/>
              </section>
            </div>
            
          ))}
    </div>
    </div>
    <div className='mx-4'>
           <button type="submit" className=" px-4 py-2 block md:text-xl text-lg rounded-lg md:h-14 h-12 w-full mx-auto my-8" 
           style={{backgroundColor: '#E1E4EB'}}>
            Discover More
          </button>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default EventListingPage;