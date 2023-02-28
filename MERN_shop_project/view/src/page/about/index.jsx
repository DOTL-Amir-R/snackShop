import React from 'react'
import aboutTopPicture from '../../assets/img/aboutTopPicture.png'
import PunnetFlapjackLimitedEdition from "../../assets/img/Punnet-Flapjack-Limited-Edition.webp"
import healthPromise from '../../assets/img/healthPromise.jpg'
import knowAddedSugar from '../../assets/img/knowAddedSugar.png'
import howGrazeWorks from '../../assets/img/howGrazeWorks.jpg'
import sustainability from '../../assets/img/sustainability.jpg'
import subscribeBanner from '../../assets/img/subscribeBanner.jpg'




import AboutCards from './AboutCards'


function About() {
  return (
    <div className='bg-neutral-50'>
      <img className='w-full h-72' src={aboutTopPicture} alt="aboutTopPicture" />
      <div className=' container'>
        <h1 className='pt-11 pb-6 text-3xl text-gray-800 font-medium border-b mb-12'>about graze</h1>
        <div className='grid grid-cols-1'>
          <AboutCards image={knowAddedSugar} title="we think everyone has a right to #KnowAddedSugar" desc="There's an added sugar crisis in the UK. So, we're on a mission to shine a light on how much added sugar is in the nation's favourite snacks, so that you can make informed choices when it comes to the best time of the day (snack time)."/>
          <AboutCards image={healthPromise} title="our health promise" desc="We believe the healthy choice shouldn't be a compromise on taste! We've found that using the best ingredients nature has to offer makes the best snacks, and we've got many delicious, wholesome creations for you to look forward to."/>
          <AboutCards image={howGrazeWorks} title="how graze works" desc="Imagine having taste experts on hand to select snacks for you! With a graze subscription you'll do exactly that, all you have to do is tell us what you like and we'll tailor the flavours of each box to suit you."/>
          <AboutCards image={sustainability} title="rewriting the snacking rulebook for healthy people and planet" desc="Our belief in healthy living isn't just about our snacks, it means looking after the people who make them and the planet we all live on too - and it's why we're proud to be a certified B Corp."/>
        </div>
      </div>
      <div style={{backgroundImage:`URL(${subscribeBanner})`}} className=' w-full py-14'>
      <figcaption className='p-14 bg-white w-1/3 rounded-lg ml-72'>
                <p className="font-normal text-2xl text-gray-700 dark:text-gray-400 py-2.5">Discover new flavours and enjoy healthier choices on a regular basis,
              with personalised graze boxes delivered to your door.</p>
                <a href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-xl hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit">
                subscribe
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </figcaption>
      </div>
    </div>
  )
}

export default About
