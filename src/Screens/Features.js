import React from 'react'
import event_ticketing_image from '../imgs/event_ticketing_image.jpg'
import Event_Ticket2 from '../imgs/Event_Ticket2.jpg'
import Marketing from '../imgs/Marketing.jpg'

function Features() {
  return (
    <div className='mt-6 px-2' style={{backgroundColor: '#D0DBF1', borderTopRightRadius: 20, borderTopLeftRadius: 20,}}>
    <div className='my-2'>
        <h1 className='font-bold text-lg text-[#0052F6] md:pt-20' style={{paddingTop: 20, marginBottom: 35}}>Teeket Features</h1>
      </div>
      <div >
        <div className='flex flex-row'>
            <p className='text-blue-500 mr-2'>01</p>
            <p className='text-blue-800 font-bold' style={{ marginBottom: 15}}>ANALYTICS AND FEEDBACK</p>
        </div>
        <p>Create events and sell tickets with our seamless and secure checkout feature for attendees in your event</p>
      </div>
      <div className='border-b-2 border-red' style={{borderBottomWidth: 2, borderBottomColor: '#D3D3D3'}}>
        <img src={event_ticketing_image} alt='Event' className='md:w-full w-100 h-100 rounded-lg mt-6 pb-12 md:justify-center'style={{ paddingBottom: 40}}/>
      </div>
      <div >
        <div className='flex flex-row mt-8'>
            <p className='text-blue-500 mr-2'>02</p>
            <p className='text-blue-800 font-bold' style={{ marginBottom: 15}}>ANALYTICS AND FEEDBACK</p>
        </div>
        <p>Use real-time analytics and reports to learn more about your buyers and what your attendees are saying about your events.</p>
      </div>
      <div className='border-b-6 border-red-200' style={{borderBottomWidth: 2, borderBottomColor: '#D3D3D3'}} >
        <img src={Event_Ticket2} alt='Event' className='md:w-full w-100 h-100 rounded-lg mt-6 pb-12 md:justify-center'style={{ paddingBottom: 40}}/>
      </div>
      <div >
        <div className='flex flex-row mt-8'>
            <p className='text-blue-500 mr-2'>03</p>
            <p className='text-blue-800 font-bold' style={{ marginBottom: 15}}>MARKETING AND PROMOTIONS</p>
        </div>
        <p>Boost event visibility and ticket sales when you market and promote your events with our tools and partners. </p>
      </div>
      <div className='border-b-2 border-red' style={{borderBottomWidth: 1, borderBottomColor: '#D3D3D3'}}>
        <img src={Marketing} alt='Event' className='md:w-full w-100 h-100 rounded-lg mt-6 pb-12 md:items-center'style={{ paddingBottom: 40}}/>
      </div>
    </div>
  )
}

export default Features
