import React from 'react'

function AboutCards(props) {
    return (
        <figure className='container grid  md:grid-cols-2 grid-cols-1'>
            <div className='p-5'>
                <img className='w-full' src={props.image} alt="" />
            </div>
            <figcaption className='flex flex-col justify-center p-5'>
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white mt-4 mb-1">{props.title}</h5>
                </a>
                <p className="font-normal text-lg text-gray-700 dark:text-gray-400 py-2.5">{props.desc}</p>
                <a href="#" className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-xl hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit">
                    learn more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </figcaption>
        </figure>
    )
}

export default AboutCards
