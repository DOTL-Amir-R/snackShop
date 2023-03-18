import { createReviewService } from './../../../api/services'
import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateReviewCart({productName , ShowCreateReview , CreateReview , CreateReviewValue}) {
    const sampleData = {
        title : "",
        desc : "",
        rating:"",
        nameOfProduct : productName,
    }
    const [data , setData] = useState(sampleData)
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setData({...data ,rating : `${newRating}`})}
    const handelCreatReview = async()=>{
        try {
            const res = await createReviewService(data); 
            toast.success(res.data.massage);
            CreateReview(CreateReviewValue+1)
            ShowCreateReview(false)
        } catch (error) {
            console.log(error.response);
            toast.error(error.response.data.massage);
        }
        

    }
    return (
        <div style={{ marginTop: "20px" }} className='bg-white p-5 w-full container mt-5 shadow'>
            <ToastContainer/>
            <h3 className='text-2xl mb-5'>write a review</h3>
            <h3 className='text-lg text-gray-800 mt-4'>rating</h3>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={48}
                activeColor="#ffd700"
            />
            <h5 className='text-lg text-gray-800'>review title</h5>
            <input type="text" name="title" id="title" onChange={(e)=>setData({...data ,title : e.target.value})} className="border border-gray-300 text-gray-900 text-sm mt-3 focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="give your review a title" required />
            <textarea className='w-full border-gray-300 h-72 mt-4' onChange={(e)=>setData({...data ,desc : e.target.value})} placeholder='write your comments here' />
            <div className='flex justify-end mt-3'>
                <button onClick={()=>handelCreatReview(data)} className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">submit review</button>
            </div>
        </div>
    )
}

export default CreateReviewCart
