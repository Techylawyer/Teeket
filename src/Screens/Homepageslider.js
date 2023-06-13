// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image1 from '../imgs/Image1.jpg';
// import Image2 from '../imgs/Image2.jpg';
// import Image3 from '../imgs/Image3.jpg';
// import Image4 from '../imgs/Image4.jpg';
// import Image5 from '../imgs/Image5.jpg';
// import Image6 from '../imgs/Image6.jpg';
// import Image7 from '../imgs/Image7.jpg';
// import Image8 from '../imgs/Image8.jpg';

// function Homepageslider() {
//     const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//     ],
//   };

//   return (
//      <div className="mt-6 mb-6 px-4 sm:px-0">
//     <Slider {...settings}>
//       <div className='w-full px-2'>
//         <img src={Image1} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image2} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image3} alt='pictures' className="w-100"  />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image4} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image5} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image6} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image7} alt='pictures' className="w-100"  />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image8} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image1} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image2} alt='pictures' className="w-100"/>
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image3} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image7} alt='pictures' className="w-100"  />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image1} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image8} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image3} alt='pictures' className="w-100"  />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image4} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image5} alt='pictures' className="w-100" />
//       </div>
//       <div className='w-full px-2'>
//         <img src={Image6} alt='pictures' className="w-100" />
//       </div>
//     </Slider>
//     </div>
//   );
// }

// export default Homepageslider;

import React, { useRef } from 'react';
import { data } from './Routes/mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Homepageslider() {
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
    <div>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={20} />
        <div
          ref={sliderRef}
          className='w-full px-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          style={{ overflow: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((item) => (
            <img
              key={item.id}
              className='w-full sm:w-1/6 md:w-1/4 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
              style={{ width: '20%' }}
            />
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={20} />
      </div>
    </div>
  );
}

export default Homepageslider;
