import RatingCard from './../../../components/shared/RatingCard'
import React from 'react'

function Reviews({reviews}) {
  return (
    <div className='grid grid-cols-4 gap-4 mt-4'>
      {
      reviews.map((review)=><RatingCard content ={review}/>)
      }
    </div>
  )
}

export default Reviews
