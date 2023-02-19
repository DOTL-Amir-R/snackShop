import React from 'react'
import Breadcrumb from '../../components/shared/breadcrumb'
import ProductCard from '../../components/shared/ProductCard'
import RatingCard from '../../components/shared/RatingCard'
import PunnetFlapjackLimitedEdition from "../../assets/img/Punnet-Flapjack-Limited-Edition.webp"
import boosts from "../../assets/img/boosts.png"
import { svgObject } from '../../assets/svg'

function Product() {
    return (
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
                </div>
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button'>write a review</button>
                <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-md md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                            </div>
                                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                        </div>
                                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </div>
    )
}

export default Product
