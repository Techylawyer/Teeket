import React from 'react'
import people from '../src/images/people-images.png'
import frame153 from '../src/images/Frame153.png'
import frame154 from '../src/images/Frame154.png'
import event from '../src/images/event-cards.png'
import '../src/styles/Attendees.css'

function Attendees() {
  return (
    <main className="w-screen h-screen text-base">
      <section className="header"></section>

      <section>
        <h2 className="text-5xl font-bold my-8 mx-8 overflow-y-hidden">
          Book Your Events with <span className="text-blue-500">Teeket</span>
        </h2>
        <p className="text-gray-400 text-xl capitalize mx-8">
          Your one stop platform to create, manage and promote your events at
          your convenience.
        </p>
        <img src={people} alt="people" className="block w-8/12 my-8 mx-8" />
      </section>

      <section>
        <h4 className="text-2xl mb-12 font-bold mx-8">Trending Events</h4>
        <img src={event} alt="events" className="w-10/12 mx-8" />
        <div className="mx-8">
          <button className="px-6 py-4 w-full text-white text-xl font-medium bg-blue-500 my-8 rounded-full">
            Discover More
          </button>
        </div>
      </section>

      <section>
        <p className="font-bold italic text-xl text-center mb-8 capitalize mx-8">
          More than 1000+ Leading Event Companies Choose Teeket
        </p>
        <div>
          <img
            src={frame153}
            alt="companies list"
            className="w-9/12 mx-8 px-8"
          />
          <img
            src={frame154}
            alt="companies list"
            className="w-9/12 mx-8 px-8"
          />
        </div>
      </section>
    </main>
  )
}

export default Attendees
