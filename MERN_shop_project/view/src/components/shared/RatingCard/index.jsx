import React from 'react'
import ReactStars from 'react-rating-stars-component'
import PunnetFlapjackLimitedEdition from "../../../assets/img/Punnet-Flapjack-Limited-Edition.webp"

function RatingCard({content}) {
    return (
        <article className='p-5 shadow rounded-lg'>
            <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src={content.picture?content.picture:PunnetFlapjackLimitedEdition}  />
                    <div className="space-y-1 font-medium">
                        <p>{content.name} <time class="block text-sm text-gray-500 dark:text-gray-400">commented on {new Date(content.createdAt).toDateString()}</time> </p>
                    </div>
            </div>
            <div className=" mb-1">
            <ReactStars
                count={5}
                value={+content.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
            />
            <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{content.title}</h3>   
            </div>
            <p className="mb-2 ml-2 font-light text-gray-500 dark:text-gray-400">{content.desc}</p>
        </article>

    )
}

export default RatingCard
