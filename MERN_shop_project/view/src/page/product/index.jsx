import React from 'react'
import Breadcrumb from '../../components/shared/breadcrumb'
import ProductCard from '../../components/shared/ProductCard'
import RatingCard from '../../components/shared/RatingCard'
import { svgObject } from '../../assets/svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { readSingleProductService } from './../../api/services'
import { uploadsURL } from './../../api/constants'
import ReactStars from "react-rating-stars-component";

function Product() {
    const location = useLocation()
    const [product, setProduct] = useState({})
    const [simulorProducts, setSimulorProducts] = useState([])
    const [reviews, setreviews] = useState([])
    const [orderNumber, setOrderNumber] = useState(1)

    const params = useParams()
    const getData = async () => {
        const res = await readSingleProductService(params.id)
        console.log(res.data);
        setProduct(res.data.products)
        setSimulorProducts(res.data.simularProducts)
        setreviews(res.data.reviews)
    }
    useEffect(() => {
        getData()
        setOrderNumber(1)
    }, [location])
    console.log(product)
    const [showCreateReview, setShowCreateReview] = useState(false)
    const addSingleProductToBasket = () => {
        const productsInBasket = localStorage.getItem("productsInBasket")
        const parsedProductsInBasket = JSON.parse(productsInBasket)
        if (!parsedProductsInBasket) {
            console.log(parsedProductsInBasket);
            const listOfBasket = [{ ...product, count: orderNumber }]
            const pasreListOfBasket = JSON.stringify(listOfBasket)
            localStorage.setItem("productsInBasket", pasreListOfBasket)
            console.log(pasreListOfBasket)
        } else {
            const listOfBasket = [{ ...product, count: orderNumber }]
            const pasreListOfBasket = JSON.stringify(listOfBasket)
            localStorage.setItem("productsInBasket", pasreListOfBasket)
            console.log(listOfBasket)
        }
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className='bg-neutral-50'>

                <h5 className='bg-pink-500 text-center text-white py-2.5 text-xl'><b>You'll get your first box half price</b> (usually £4.99) </h5>
                <Breadcrumb />
                <figure className='container grid grid-cols-2'>
                    <div className='flex justify-center'>
                        <img className='justify -center' src={uploadsURL + product.picture} alt="" />
                    </div>
                    <figcaption className='flex justify-center'>
                        <div className='w-3/4 p-5 shadow rounded-lg'>
                            <h1 className=' text-4xl font-bold mb-5'>{product.name}</h1>
                            <h2 className='text-3xl font-bold mb-5'>{`$${product.price}`}</h2>
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
                            <p className='text-lg my-2.5'>{product.desc}</p>
                            <p className='text-lg mt-2.5 mb-5'>bites ({product.count} x 120g ℮ = {product.count * 120}g)</p>
                            <div className='flex gap-5'>
                                <div className="inline-flex rounded-3xl shadow-md overflow-hidden" role="group">
                                    <button onClick={() => { if (orderNumber != 1) { setOrderNumber(orderNumber - 1) } }} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                        -
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white">
                                        {orderNumber}
                                    </button>
                                    <button type="button" onClick={() => setOrderNumber(orderNumber + 1)} className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                        +
                                    </button>
                                </div>
                                <button onClick={addSingleProductToBasket} className="grow text-white shadow-md bg-green-500 hover:bg-white hover:text-green-500 border-green-500  border-2 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-3xl text-md px-5 py-2.5 text-center">add to basket</button>
                            </div>
                        </div>
                    </figcaption>

                </figure>
                <h3 className='text-2xl container pt-8 font-bold'>You may also like</h3>
                <div className='grid grid-cols-4 gap-5 container py-8 px-5'>
                    {
                        simulorProducts?.map((product) => {
                            return <ProductCard
                                name={product.name}
                                price={product.price}
                                picture={uploadsURL + product.picture}
                                linkTo={"/shop/" + product.name.split(" ").join("_")}
                            />
                        })
                    }
                </div>
                <div className='container p-5 m-5'>
                    <div className='flex'>
                        <h3 className='grow text-2xl font-bold text-gray-800'>customer reviews</h3>
                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" onClick={() => setShowCreateReview(!showCreateReview)} className='underline' type='button'>write a review</button>
                    </div>
                    {showCreateReview && (
                        <div style={{ marginTop: "20px" }} className='bg-white p-5 w-full container mt-5 shadow'>
                            <h3 className='text-2xl mb-5'>write a review</h3>
                            <h3 className='text-lg text-gray-800 mt-4'>rating</h3>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={48}
                                activeColor="#ffd700"
                                />
                            <h5 className='text-lg text-gray-800'>review title</h5>
                            <input type="text" name="email" id="email" className="border border-gray-300 text-gray-900 text-sm mt-3 focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="give your review a title" required />
                            <textarea className='w-full border-gray-300 h-72 mt-4' placeholder='write your comments here' />
                            <div className='flex justify-end mt-3'>
                                <button onClick={() => setShowCreateReview(!showCreateReview)} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">submit review</button>
                            </div>
                        </div>
                    )

                    }
                    {
                        reviews.map((review) => <RatingCard />) || <h2 className=' text-center mt-8 text-lg'>no review be first one</h2>
                    }
                    <div className='grid grid-cols-3 gap-5 my-8'>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Product
