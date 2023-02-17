import Breadcrumb from '../../components/shared/breadcrumb'
import React from 'react'
import grazeNewHero from "../../assets/img/graze_new_hero.webp"

function Shop() {
    return (
        <main className='bg-neutral-50'>
            <h5 className='bg-pink-500 text-center text-white py-2.5 text-xl'><b>You'll get your first box half price</b> (usually £4.99) </h5>
            <Breadcrumb/>
            <div style={{ backgroundImage: `URL(${grazeNewHero})` }} className='py-20'>
                <h1 className='text-center text-slate-50 text-4xl font-bold mb-2'>shop now</h1>
                <p className='text-center text-slate-50 text-2xl font-semibold'>choose your sutable graze box</p>
            </div>
        </main>
    )
}

export default Shop
