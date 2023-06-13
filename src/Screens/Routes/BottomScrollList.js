import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image1 from '../../imgs/Image1.jpg';
import Image2 from '../../imgs/Image2.jpg';
import Image3 from '../../imgs/Image3.jpg';
import Image4 from '../../imgs/Image4.jpg';
import Image5 from '../../imgs/Image5.jpg';
import Image6 from '../../imgs/Image6.jpg';
import Image8 from '../../imgs/Image8.jpg';

function BottomScrollList() {
  const sliderRef = useRef(null); 

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className='pb-8'>
      <div className='relative flex items-center '>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={20} />
        <div
          ref={sliderRef}
          className='flex w-full overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          style={{ width: '100%' }}
        >
          <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image1} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Austin James</p>
                <p>1 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>It is a good app with lots of features. </p>
            <p className='text-sm'>I use it to check people into events.</p>
            <p className='text-sm'> There are a few...</p>
          </div>

          <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image3} alt='User' style={{paddingRight: 10}} />
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Sophie May</p>
                <p>3 June 2023</p>   
              </div>
            </div>
            <p className='text-sm mt-6'>I recommend that you try out this app. </p>
            <p className='text-sm'>It makes event planning and</p>
            <p className='text-sm'>management easy....</p>
          </div>

          <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image2} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>John Doe</p>
                <p>5 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Great app with a lot of features. </p>
            <p className='text-sm'>I surely recommend it for </p>
            <p className='text-sm'>event planning.....</p>
          </div>

          <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image5} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Sunny Deep</p>
                <p>5 May 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Great app with a lot of features. </p>
            <p className='text-sm'>I surely recommend it for </p>
            <p className='text-sm'>event planning.....</p>
          </div>

        <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image6} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Silver Pat</p>
                <p>8 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Great app with a lot of features. </p>
            <p className='text-sm'>I surely recommend it for </p>
            <p className='text-sm'>event planning.....</p>
          </div>

            <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image1} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Hat pat</p>
                <p>5 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Great app with a lot of features. </p>
            <p className='text-sm'>I surely recommend it for </p>
            <p className='text-sm'>event planning.....</p>
          </div>

            <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image8} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Filly Doe</p>
                <p>5 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Great app with a lot of features. </p>
            <p className='text-sm'>I surely recommend it for </p>
            <p className='text-sm'>event planning.....</p>
          </div>


          <div style={{paddingRight: "10%", width: '50%'}}>
            <div className='rounded-lg overflow-hidden shadow flex flex-row items-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Image4} alt='User' style={{paddingRight: 10}}/>
              </div>
              <div className='ml-4 p-4'>
                <p className='font-bold'>Jane Smith</p>
                <p>8 June 2023</p>
              </div>
            </div>
            <p className='text-sm mt-6'>Really nice app.</p>
            <p className='text-sm'>Give it a try......</p>
          </div>
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={20} />
      </div>
      {/* <div className='mx-2 mt-6 md:text-center text-start'>
        <p className='md:text-3xl text-lg text-[#0052F6] font-bold'> Teeket</p>
        <p className='md:text-3xl text-lg text-[#0052F6] font-bold'> for business</p>
        <p className='md:text-2xl text-lg  mt-4'> Great news! host events as a business</p>
        <p className='md:text-2xl text-lg '> with teeket at no cost to you and your</p>
        <p className='md:text-2xl text-lg '> attendees</p>
      </div>
      <div className='mx-12'>
      <button
          type="submit"
           className="bg-blue-500 text-white px-4 py-2 block text-lg rounded-full h-12 w-full mx-auto my-8"
              >
           Get Started
        </button>
      </div> */}
    </div>
  );
}

export default BottomScrollList;
