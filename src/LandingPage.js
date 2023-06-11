import React from 'react'
// import Background from '../src/images/bg-image.png'
import logo from '../src/images/teeket text logo.png'
import img1 from '../src/images/Image_one.png'
import img2 from '../src/images/Image_two.png'
import frame1 from '../src/images/Frame 159.png'
import frame2 from '../src/images/Frame 160.png'
import frame3 from '../src/images/Frame 161.png'
import '../src/styles/LandingPage.css'

function LandingPage() {
  return (
    <main className="flex justify-center items-center w-4">
      <article className="main-div container text-white">
        <section id="logo" className="">
          <img src={logo} alt="" className="d-block mx-auto w-72 my-8" />
        </section>
        <section
          id="images"
          className="grid grid-cols-5 grid-rows-2 grid-flow-row gap-4 justify-stretch"
        >
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="col-span-2">
            <img src={frame1} alt="" />
          </div>
          <div className="row-span-2 col-span-2">
            <img src={frame3} alt="" />
          </div>
          <div className="col-span-2">
            <img src={frame2} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </section>
        <section id="text" className="text-center my-8">
          <p>
            Your one stop platform to create, manage and promote your events at
            your convenience
          </p>
        </section>

        <section
          id="buttons"
          className="flex flex-col justify-center items-center"
        >
          <div className="my-8">
            <button
              type="button"
              className="btn-1 w-72 bg-blue-800 px-8 py-4 rounded-xl"
            >
              Create an event
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn-2 w-72 bg-white text-black px-8 py-4 rounded-xl"
            >
              Discover events
            </button>
          </div>
        </section>
      </article>
    </main>
  )
}

export default LandingPage
