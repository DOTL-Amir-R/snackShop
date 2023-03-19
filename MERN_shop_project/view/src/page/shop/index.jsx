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
import { useEffect } from 'react';
import { handelShowProductService } from './../../api/services';
import { useState } from 'react';
import { uploadsURL } from './../../api/constants';

function Shop() {
    const [staticData , setStaticData] = useState()
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    console.log(data);
    const getData = async () => {
        const res = await handelShowProductService();
        setData(res.data.products);
        setStaticData(res.data.products);
    };
    useEffect(() => {
        getData();
    }, []);

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
                <div className="flex container pt-8 items-center">
                    <div className="text-white bg-green-500 hover:bg-green-600 ml-4 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center">
                        <Categories setData={setData} setError={setError} setStaticData={setStaticData}/>
                    </div>
                    {/* <div className="text-white bg-green-500 hover:bg-green-600 ml-4 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"> */}
                        <Filter setData={setData} filteredCategoryData={staticData} />
                    {/* </div> */}
                    <div className=" ml-4 py-1.5  font-medium  text-lg  text-center">
                        Sort by
                    </div>
                    <div className="text-white bg-green-500 focus:ring-4 pl-1.5 focus:outline-none focus:ring-green-300 font-medium rounded-r-3xl text-sm pr-5 pr-2 py-2.5 text-center">
                        <SortByMenu setData={setData} data={data}/>
                    </div>
                </div>
                <section className="grid grid-cols-4 gap-5 container py-8">
                    {data?.map((product) => {
                        return (
                            <>
                                <ProductCard
                                    name={product.name}
                                    price={product.price}
                                    picture={uploadsURL + product.picture}
                                    linkTo={
                                        '/shop/' +
                                        product.name.split(' ').join('_')
                                    }
                                />
                            </>
                        );
                    })}
                    {error?<h1>{error}</h1>:''}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Shop;
