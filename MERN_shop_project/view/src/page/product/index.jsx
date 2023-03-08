import React from 'react'
import Breadcrumb from '../../components/shared/breadcrumb'
import ProductCard from '../../components/shared/ProductCard'
import RatingCard from '../../components/shared/RatingCard'
import PunnetFlapjackLimitedEdition from "../../assets/img/Punnet-Flapjack-Limited-Edition.webp"
import boosts from "../../assets/img/boosts.png"
import { svgObject } from '../../assets/svg'
import { Textarea } from 'flowbite-react'
import { useState } from 'react'
import { Header } from "../../layout/core/header"

function Product() {
    const [showCreateReview , setShowCreateReview] = useState(false)
    return (
        <>

            <div className='bg-neutral-50'>

            <h5 className='bg-pink-500 text-center text-white py-2.5 text-xl'><b>You'll get your first box half price</b> (usually £4.99) </h5>
            <Breadcrumb />
            <figure className='container grid grid-cols-2'>
                <div className='flex justify-center'>
                    <img className='justify -center' src={PunnetFlapjackLimitedEdition} alt="" />
                </div>
                <figcaption className='flex justify-center'>
                    <div className='w-3/4 p-5 shadow rounded-lg'>
                        <img src={boosts} alt="boosts" />
                        <h2 className='text-3xl font-bold mb-5'>£2.79</h2>
                        <ul>
                            <li className='flex gap-2 mb-2 items-center'>
                                {svgObject.grazeFiber}
                                <h4 className='text-lg font-bold'>high in fibre</h4>
                            </li>
                            <li className='flex gap-2 mb-2 items-center'>
                                {svgObject.thunder}
                                <h4 className='text-lg font-bold'> manganese</h4>
                            </li>
                            <li className='flex gap-2 mb-2 items-center'>
                                {svgObject.tike}
                                <h4 className='text-lg font-bold'>nothing artificial</h4>
                            </li>
                            <li className='flex gap-2 mb-2 items-center'>
                                {svgObject.dumbel}
                                <h4 className='text-lg font-bold'>source of protein</h4>
                            </li>
                            <li className='flex gap-2 items-center'>
                                {svgObject.leave}
                                <h4 className='text-lg font-bold'>whole rolled oats</h4>
                            </li>
                        </ul>
                        <p className='text-lg my-2.5'>wholegrain oat flapjack with peanut butter & soy protein crispies</p>
                        <p className='text-lg mt-2.5 mb-5'>bites (4 x 30g ℮ = 120g)</p>
                        <div className='flex gap-5'>
                            <div className="inline-flex rounded-3xl shadow-md overflow-hidden" role="group">
                                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    -
                                </button>
                                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white">
                                    1
                                </button>
                                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                    +
                                </button>
                            </div>
                            <button className="grow text-white shadow-md bg-green-500 hover:bg-white hover:text-green-500 border-green-500  border-2 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-3xl text-md px-5 py-2.5 text-center">add to basket</button>
                        </div>
                    </div>
                </figcaption>

            </figure>
            <h3 className='text-2xl container pt-8 font-bold'>You may also like</h3>
            <div className='grid grid-cols-4 gap-5 container py-8 px-5'>
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
            </div>
            <div className='container p-5 m-5'>
                <div className='flex'>
                    <h3 className='grow text-2xl font-bold text-gray-800'>customer reviews</h3>
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" onClick={()=> setShowCreateReview(!showCreateReview)} className='underline' type='button'>write a review</button>
                </div>
                { showCreateReview && (
                    <div style={{ marginTop: "20px" }} className='bg-white p-5 w-full container mt-5 shadow'>
                    <h3 className='text-2xl mb-5'>write a review</h3>
                    <div>
                        <label for="email" className="block mb-2 text-lg text-gray-800 dark:text-white">name</label>
                        <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 text-sm  focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label for="email" className="block mt-4 mb-2 text-lg text-gray-800 dark:text-white">email</label>
                        <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 text-sm  focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="you@example.com" required />
                    </div>
                    <h3 className='text-lg text-gray-800 mt-9'>rating</h3>
                    <div className="flex items-center mb-5">
                        <svg aria-hidden="true" className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-10 h-10 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    </div>
                    <h5 className='text-lg text-gray-800'>review title</h5>
                    <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 text-sm mt-3 focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="give your review a title" required />
                    <textarea className='w-full border-gray-300 h-72 mt-4' placeholder='write your comments here'/>
                    <div className='flex justify-end mt-3'>
                    <button onClick={()=> setShowCreateReview(!showCreateReview)} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">submit review</button>
                    </div>
                </div>
                )

                }
                
                <div className='grid grid-cols-3 gap-5 my-8'>
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Product
