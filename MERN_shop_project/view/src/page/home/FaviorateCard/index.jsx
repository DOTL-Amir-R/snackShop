import React from 'react'
import { svgObject } from '../../../assets/svg'

function FaviorateCard({titleTag , picture , desc , onlineExclusive="false"}) {
    return (
        <div className="w-60 bg-white border border-gray-200 rounded-lg shadow flex flex-col">
            {titleTag}
            <img src={picture} alt="lemonPoppyseed" />
            {onlineExclusive && <h5 className="mb-2 text-lg text-center bg-teal-500 font-bold tracking-tight text-slate-50 p-1.5">ONLINE EXCLUSIVE</h5>}
            <div className="flex flex-col px-5 py-2.5 grow">
                <p className="font-normal text-gray-700 text-lg leading-7 dark:text-gray-400 mb-4 grow">{desc}</p>
                <a href="#" className='mb-3 underline decoration-solid text-zinc-400'>
                    more information
                </a>
            </div>
            <div className="flex justify-evenly mb-6">
                {svgObject.kcal}
                {svgObject.fiber}
                {svgObject.Artificial}
            </div>
        </div>
    )
}

export default FaviorateCard
