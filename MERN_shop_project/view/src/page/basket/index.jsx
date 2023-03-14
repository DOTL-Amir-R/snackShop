import { Footer } from "../../layout/core/footer";
import { Header } from "../../layout/core/header";
import { BasketProduct } from "./basketProducts";
import { ProfileMenuSidebar } from "./profileMenuSideBar";
import { FloatLabelInput } from '../../components/FloatLableInput';

export function Basket() {
    return(
        <>
            <Header/>
            <div className=" grid grid-cols-4 container">
                <BasketProduct/>
                <div className="flex flex-col gap-3 p-5 shadow-sm rounded-lg mx-4 border h-fit">
                    <h1 className="text-2xl text-gray-800">total price of basket:</h1>
                    <p className="text-lg text-gray-700">$2023</p>
                    <div className="flex gap-5">
                        <input className="rounded-sx  w-32 grow" type="text" placeholder="discount code" />
                        <button className="text-white bg-green-500 rounded-xl px-3 py-2">submit</button>
                    </div>
                    <h3 className="text-xl text-gray-800">price to pay:</h3>
                    <p className="text-lg text-gray-700">$2002</p>
                    <button className="text-white bg-green-500 rounded-xl px-3 py-2">pay</button>
                </div>
            </div>
            <Footer/>
        </>

    )
}