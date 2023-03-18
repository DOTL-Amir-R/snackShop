import React from 'react'
import Breadcrumb from '../../components/shared/breadcrumb'
import ProductCard from '../../components/shared/ProductCard'
import RatingCard from '../../components/shared/RatingCard'
import { svgObject } from '../../assets/svg'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { readSingleProductService, showReviewService } from './../../api/services'
import { uploadsURL } from './../../api/constants'
import CreateReviewCart from './CreateReviewCart'
import Reviews from './Reviews'

function Product() {
    const location = useLocation()
    const [product, setProduct] = useState(null)
    const [simulorProducts, setSimulorProducts] = useState([])
    const [reviews, setreviews] = useState([])
    const [orderNumber, setOrderNumber] = useState(1)
    const [createReview, setCreateReview] = useState(0)
    const params = useParams()
    const getData = async () => {
        const res = await readSingleProductService(params.id)
        setProduct(res.data.products)
        setSimulorProducts(res.data.simularProducts)
        setreviews(res.data.reviews)
    }
    useEffect(() => {
        getData()
        setOrderNumber(1)
    }, [location, createReview])
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

    return (
        <>
            {product ? <div className='bg-neutral-50'>
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
                        <CreateReviewCart productName={product.name} ShowCreateReview={setShowCreateReview} CreateReview={setCreateReview} CreateReviewValue={createReview} />
                    )
                    }
                    {
                        reviews ? <Reviews reviews={reviews} /> : <h2 className=' text-center mt-8 text-lg'>no review be first one</h2>
                    }
                    <div className='grid grid-cols-3 gap-5 my-8'>

                    </div>
                </div>
            </div> : <div className='w-screen h-screen flex justify-center items-center flex-col'>
                <h1 className='text-3xl text-gray-800 mb-8'>404 : product not found </h1>
                <p className='text-lg'>
                    go to <Link className='underline text-blue-500' to="/shop">shop</Link>
                </p>
            </div>}
        </>
    )
}

export default Product
