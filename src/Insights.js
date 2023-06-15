import React from 'react'
import graph from '../src/images/Graph.jpg'
import img3 from '../src/images/image_three.png'
import img4 from '../src/images/image_four.png'
import img5 from '../src/images/image-five.jpg'
import { GoChevronLeft, GoChevronDown } from 'react-icons/go'
import { BsInfoCircle } from 'react-icons/bs'
import '../src/styles/Insights.css'
import {useNavigate} from 'react-router-dom';

function Insights() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white md:text-base text-sm">
      <article className="px-5">
        <section className="flex gap-3 my-4" onClick={() => navigate('/EventListing')}>
          <GoChevronLeft className="text-2xl" />
          <p>Go back</p>
        </section>

        <section className="flex justify-between md:justify-start md:gap-14 mb-12">
          <div>
            <h2 className="text-sm font-bold">Registration</h2>
            <p className="text-xs text-gray-400">
              See all registered attendees details
            </p>
          </div>
          <div className="flex justify-between bg-gray-200 p-2 gap-3 rounded-xl" onClick={() => navigate('/EventListing')}>
            <p>Past month </p>
            <GoChevronDown className="text-2xl" />
          </div>
        </section>

        <section className="mb-8">
          <img
            src={graph}
            alt="events graph"
            className="block w:10/12 md:w-5/12 lg:w-4/12"
          />
        </section>

        <section className="mb-8">
          <h3 className="mb-4 font-bold">Event views</h3>
          <div className="flex justify-between md:justify-start md:gap-12">
            <div>
              <p className="text-xs text-gray-500">Total Views</p>
              <p className="font-bold leading-loose">240</p>
            </div>
            <div className="border-r-2 border-l-2 px-12 border-gray-200">
              <p className="text-xs text-gray-500">Total RSVPs</p>
              <p className="font-bold leading-loose">24</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Shares</p>
              <p className="font-bold leading-loose">30</p>
            </div>
          </div>
        </section>

        <section className="text-xs">
          <div className="flex gap-2">
            <h3 className="font-bold mb-6">Top Referrers</h3>
            <BsInfoCircle className="text-gray-500" />
          </div>
          <div className="flex justify-between md:justify-start md:gap-16 gap-4 mb-2">
            <div className="flex gap-4">
              <img
                src={img3}
                alt="top referrer"
                className="rounded-full w-2/12"
              />
              <p>john.doe@gmail.com</p>
            </div>
            <div>
              <p>
                <span className="font-bold">721</span> attendees
              </p>
            </div>
          </div>

          <div className="flex justify-between md:justify-start md:gap-16 gap-4 mb-2">
            <div className="flex gap-4">
              <img
                src={img4}
                alt="top referrer"
                className="rounded-full w-2/12"
              />
              <p>jane.doe@gmail.com</p>
            </div>
            <div>
              <p>
                <span className="font-bold">801</span> attendees
              </p>
            </div>
          </div>

          <div className="flex justify-between md:justify-start md:gap-16 gap-4 mb-2">
            <div className="flex gap-4">
              <img
                src={img5}
                alt="top referrer"
                className="rounded-full w-2/12"
              />
              <p className="text-ellipsis">daniel023@gmail.com</p>
            </div>
            <div>
              <p>
                <span className="font-bold">1220</span> attendees
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Insights
