import { Footer } from "../../layout/core/footer";
import { Header } from "../../layout/core/header";
import { BasketProduct } from "./basketProducts";
import { ProfileMenuSidebar } from "./profileMenuSideBar";
import { FloatLabelInput } from '../../components/FloatLableInput';

export function Basket() {
    return(
        <>
            <Header/>
            <div className='w-2/5 flex self-center ml-8'>
                    <FloatLabelInput
                        type="search"
                        labelText="search for products"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                    />
                </div>
            <div className="pt-5 flex">
                <BasketProduct/>
                <ProfileMenuSidebar/>
            </div>
            <Footer/>
        </>

    )
}