import React from 'react'
import FaviorateCard from "../FaviorateCard"
import regularBoxes from '../../../assets/img/regularBoxes.png'
import heart from '../../../assets/img/heart.png'
import letter from '../../../assets/img/letter-icon.png'
import lemonPoppyseed from '../../../assets/img/lemonPoppyseed.jpg'
import palypauseIcon from '../../../assets/img/playpause-icon.png'
import cocoaVanilla from '../../../assets/img/cocoaVanilla.jpg'
import marmiteCrunch from "../../../assets/img/marmiteCrunch.jpg"
import speculoos from "../../../assets/img/speculoos.jpg"
import bbqCrunch from "../../../assets/img/bbqCrunch.jpg"
import onlineShop from "../../../assets/img/online-shop.png"
import packIcon from "../../../assets/img/pack-icon.png"
import winIcon from "../../../assets/img/win-icon.png"
import offersIcon from "../../../assets/img/offers-icon.png"
import inTheShops from "../../../assets/img/in-the-shops.png"
import sainsburys from "../../../assets/img/sainsburys.png"
import ocado from "../../../assets/img/ocado.png"
import morrisons from "../../../assets/img/morrisons.png"
import waitrose from "../../../assets/img/waitrose.png"
import snackBoxIcon from "../../../assets/img/snackBoxIcon.jpg"
import heroAnimationDesktop from "../../../assets/img/hero-animation_desktop.gif"
import { svgObject } from '../../../assets/svg'

function Main() {
    return (
        <main className='bg-neutral-50'>
            <section>
                <h5 className='bg-pink-500 text-center text-white py-2.5 text-xl'><b>You'll get your first box half price</b> (usually £4.99) </h5>
                <div className='flex justify-center items-center' style={{ backgroundImage: `URL(${heroAnimationDesktop})`,backgroundRepeat: "no-repeat",backgroundSize:"cover", backgroundPosition: "CENTER", width: "100%", height: "70vh" }}>
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-96">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white w-48 mx-auto text-center">better snacking starts here</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Discover the joy of, wholesome snacks posted to yoi through your letterbox</p>
                        <div className='flex justify-center'>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-3xl hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mx-auto">
                            choose your box
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <h2 className='text-center text-amber-900 text-4xl mb-2.5 mt-8 font-semibold'>ways to graze</h2>
                <div className='flex justify-center mb-8'>
                    <p>See our <span className='font-semibold'>3,545</span> reviews on</p>
                    {svgObject.trustpilot}
                </div>
                <div className='flex justify-center gap-6'>
                    <div className='w-80 p-6 bg-white border border-gray-200 rounded-lg shadow '>
                        <figure>
                            <img className='mx-auto' src={regularBoxes} alt="regular boxes" />
                        </figure>
                        <figcaption>
                            <h3 className='text-center text-amber-900 text-3xl mt-4 mb-5 font-semibold'>regular graze boxes</h3>
                            <p className='text-lg text-amber-900 leading-7 mb-4'>Snacks in the post, as often as you like...</p>
                            <ul>
                                <li className='flex gap-5 mb-3.5'>
                                    <img width="40px" height="40px" src={heart} alt="HEART ICON" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>rate your snacks to get more of what you love</p>
                                </li>
                                <li className='flex gap-5 mb-3.5'>
                                    <img width="40px" height="40px" src={palypauseIcon} alt="play puase icon" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>pause or cancel your boxes online any time</p>
                                </li>
                                <li className='flex gap-5 mb-3.5'>
                                    <img width="40px" height="40px" src={letter} alt="letter icon" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>Royal Mail delivers your tailored box (for free!)</p>
                                </li>
                                <li className='flex justify-center mt-10 mb-4'>
                                    <button className='text-lg leading-7 text-emerald-500 px-4 py-1 rounded-3xl border-emerald-500 border-2 mx-auto bg-white hover:text-white hover:bg-emerald-500'>choose your box</button>
                                </li>
                            </ul>
                        </figcaption>
                    </div>
                    <div className='w-80 p-6 bg-white border border-gray-200 rounded-lg shadow '>
                        <figure>
                            <img className='mx-auto' src={onlineShop} alt="regular boxes" />
                        </figure>
                        <figcaption>
                            <h3 className='text-center text-amber-900 text-3xl mt-4 mb-5 font-semibold'>online shop</h3>
                            <p className='text-lg text-amber-900 leading-7 mb-4'>Stock up on your favourites in our online shop. You'll find...</p>
                            <ul>
                                <li className='flex gap-5 mb-3.5  h-14'>
                                    <img width="40px" height="40px" src={packIcon} alt="HEART ICON" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>multipacks, variety packs and more</p>
                                </li>
                                <li className='flex gap-5 mb-3.5 h-14 items-center'>
                                    <img width="40px" height="40px" src={winIcon} alt="play puase icon" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>exclusive snacks & flavours</p>
                                </li>
                                <li className='flex gap-5 mb-3.5  h-14'>
                                    <img width="40px" height="40px" src={offersIcon} alt="letter icon" />
                                    <p className='text-lg text-amber-900 leading-7 font-light'>exclusive offers (get our emails to stay in the loop)</p>
                                </li>
                                <li className='flex justify-center mt-10 mb-4'>
                                    <button className='text-lg leading-7 text-emerald-500 px-4 py-1 rounded-3xl border-emerald-500 border-2 mx-auto bg-white hover:text-white hover:bg-emerald-500'>explore the shop</button>
                                </li>
                            </ul>
                        </figcaption>
                    </div>
                    <div className='w-80 p-6 bg-white border border-gray-200 rounded-lg shadow '>
                        <figure>
                            <img className='mx-auto' src={inTheShops} alt="regular boxes" />
                        </figure>
                        <figcaption>
                            <h3 className='text-center text-amber-900 text-3xl mt-4 mb-5 font-semibold'>in the shops</h3>
                            <p className='text-lg text-amber-900 leading-7 mb-4'>Find us when you're out and about - or when you're doing your online supermarket shop.</p>
                            <div>
                                <img src={sainsburys} className='py-1' alt="sainsburys" />
                                <div className='flex py-1'>
                                    <img className='m-1' src={ocado} alt="ocado" />
                                    <img className='m-1' src={morrisons} alt="morrisons" />
                                </div>
                                <img src={waitrose} className='py-1' alt="waitrose" />
                            </div>
                        </figcaption>
                    </div>
                </div>
                <h3 className='text-center text-amber-800 text-4xl my-7 font-semibold'>grazers' favourites</h3>
                <div className='flex gap-9'>
                    <FaviorateCard titleTag={<div className='px-1.5 pb-2.5 mt-4 mb-5 text-3xl text-fuchsia-700 text-center'>Lemon & <br></br> Poppyseed Cake</div>} picture={lemonPoppyseed} desc="Zingy lemon & poppy seed cake served with our unique graze afternoon infusion." onlineExclusive={true} />
                    <FaviorateCard titleTag={<div className='px-1.5 pb-2.5 mt-4 mb-5 text-3xl text-violet-700 text-center'>Cocoa Vanilla <br></br> Protein Flapjack</div>} picture={cocoaVanilla} desc="The perfect protein-packed pick-me-up, combining rich cocoa with whole rolled oats and vanilla." onlineExclusive={false} />
                    <FaviorateCard titleTag={<div className='px-1.5 pb-2.5 mt-4 mb-5 text-3xl text-slate-900 text-center'>Marmite <br></br> Crunch</div>} picture={marmiteCrunch} desc="Love it or hate it, our marmite crunch brings a hit of savoury tang to roasted veg." onlineExclusive={false} />
                    <FaviorateCard titleTag={<div className='px-1.5 pb-2.5 mt-4 mb-5 text-3xl text-pink-600 text-center'>Belgian <br></br> Speculoos</div>} picture={speculoos} desc="Belgian speculoos cookie dip and cinnamon pretzel sticks." onlineExclusive={true} />
                    <FaviorateCard titleTag={<div className='px-1.5 pb-2.5 mt-4 mb-5 text-3xl text-orange-500 text-center'>Smoky Barbecue <br></br> Crunch</div>} picture={bbqCrunch} desc="Barbecue flavoured peas, corn chips & chilli corn." onlineExclusive={false} />
                </div>
                <h3 className='text-center text-amber-800 text-4xl my-7 font-semibold'>join thousands of grazers who love their graze box</h3>
                <div className='flex justify-center gap-2 pb-10'>
                Average 
                {svgObject.starRating}
                <strong>3,552</strong> 
                reviews on
                {svgObject.trustpilot}
                </div>
            </section>
        </main>
    )
}

export default Main
