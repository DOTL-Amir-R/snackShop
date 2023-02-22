import './index.css'
import iconImage from '../../../assets/img/Punnet-Flapjack-Limited-Edition.webp'

export function BasketCard() {
    return(
        <div className="ml-5  rounded-xl bg-slate-50 mb-8 basket-card-container">
        <figure className='flex justify-between rounded-lg '>
            <img className='icon-card-for-basket m-1.5 rounded-lg' src={iconImage}/>
            <figcaption className='flex items-center mr-8'>
                <div className='flex flex-col pl-8 text-lg font-bold'>price:<span className='text-sm font-normal '>999999$</span></div>
                <div className='flex flex-col pl-8 text-lg font-bold'>Number Of Products:<span className='flex self-center text-sm font-normal' >01</span></div>
                <div className='flex flex-col pl-8 text-lg font-bold'>name:<span className='text-sm font-normal'>snackTest</span></div>
                <div className='flex flex-col pl-8 text-lg font-bold'>code:<span className='text-sm font-normal'>123456789</span></div>
                <div className='ml-5 '>
                    <div className='number-of-products-container'>
                    <button className='py-1.5 px-2 plus-button'>+</button>
                <input type='number' disabled='true'  className='input-number-of-products text-center' value='1'/>
                <button className='py-1.5 px-2 minus-button'>-</button>
                    </div>
                </div>

            </figcaption>
        </figure>
        </div>
    )
}