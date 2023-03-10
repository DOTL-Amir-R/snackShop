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
import { useEffect } from 'react';
import { handelShowProductService } from './../../api/services';
import { useState } from 'react';
import { uploadsURL } from './../../api/constants';

function Shop() {
    const [data , setData]= useState([])
    const getData = async () => {
        const res = await handelShowProductService()
        setData(res.data.products)
    }
    useEffect(() => {
        getData()    
    }, [])
    
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
                    <div className="grow items-center">
                        <Categories />

                    </div>
                    <SortByMenu />
                </div>
                <section className="grid grid-cols-4 gap-5 container py-8">
                    {
                        data?.map((product) => { return <ProductCard
                        name={product.name}
                        price={product.price}
                        picture={uploadsURL+product.picture}
                        linkTo={"/shop/"+product.name.split(" ").join("_")}
                    />} )
                    }
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Shop;
