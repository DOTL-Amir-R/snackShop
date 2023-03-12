import Breadcrumb from '../../components/shared/breadcrumb';
import ProductCard from '../../components/shared/ProductCard';
import React from 'react';
import grazeNewHero from '../../assets/img/graze_new_hero.webp';
import PunnetFlapjackLimitedEdition from '../../assets/img/Punnet-Flapjack-Limited-Edition.webp';
import { Header } from '../../layout/core/header';
import { Footer } from '../../layout/core/footer';
import { DropDownItemMenu } from '../../components/shared/DropDownItemMenu';
import { DropDownMenuContainer } from '../../components/shared/DropDownMenuHover';
import { Dropdown } from 'flowbite-react';
import { SortByMenu } from './sortByMenu';
import { Categories } from './categories';
import { Filter } from './filter';

function Shop() {
    return (
        <>
            <Header />
            <main className="bg-neutral-50">
                <div
                    style={{ backgroundImage: `URL(${grazeNewHero})` }}
                    className="py-20"
                >
                    <h1 className="text-center text-slate-50 text-4xl font-bold mb-2">
                        shop now
                    </h1>
                    <p className="text-center text-slate-50 text-2xl font-semibold">
                        choose your sutable graze box
                    </p>
                </div>
                <div className="flex container pt-8 gap-4">
                    {/* <div className="grow items-center"></div> */}

                    
                    <div className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
                    <Categories/>
                    </div>
                    <div className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
                    <Filter/>
                    </div>
                    <div className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
                    <SortByMenu/>
                    </div>


                </div>
                <section className="grid grid-cols-4 gap-5 container py-8">
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                    <ProductCard
                        name="mince pie flapjack multipack"
                        price="599"
                        picture={PunnetFlapjackLimitedEdition}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Shop;
