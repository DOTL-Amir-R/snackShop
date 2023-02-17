import Breadcrumb from '../../components/shared/breadcrumb'
import ProductCard from '../../components/shared/ProductCard'
import React from 'react'
import grazeNewHero from "../../assets/img/graze_new_hero.webp"
import PunnetFlapjackLimitedEdition from "../../assets/img/Punnet-Flapjack-Limited-Edition.webp"

function Shop() {
    return (
        <main className='bg-neutral-50'>
            <h5 className='bg-pink-500 text-center text-white py-2.5 text-xl'><b>You'll get your first box half price</b> (usually £4.99) </h5>
            <Breadcrumb />
            <div style={{ backgroundImage: `URL(${grazeNewHero})` }} className='py-20'>
                <h1 className='text-center text-slate-50 text-4xl font-bold mb-2'>shop now</h1>
                <p className='text-center text-slate-50 text-2xl font-semibold'>choose your sutable graze box</p>
            </div>
            <section className='grid grid-cols-4 gap-5 container py-8'>
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
                <ProductCard name="mince pie flapjack multipack" price="599" picture={PunnetFlapjackLimitedEdition} />
            </section>
        </main>
    )
}

export default Shop
