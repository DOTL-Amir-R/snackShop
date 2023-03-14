import './index.css'
import iconImage from '../../../assets/img/Punnet-Flapjack-Limited-Edition.webp'

export function BasketCard() {
    return (
        <div className="rounded-xl bg-slate-50 mb-8 basket-card-container">
            <figure className='flex  rounded-lg '>
                <img className='icon-card-for-basket m-1.5 rounded-lg' src={iconImage} />
                <figcaption className='flex items-center mr-8 justify-evenly grow'>
                    <div className='flex flex-col text-lg font-bold'>name:<span className='text-sm font-normal'>snackTest</span></div>
                    <div className='flex flex-col text-lg font-bold'>price:<span className='text-sm font-normal '>999999$</span></div>
                    <div className='ml-5 '>
                    <div className="inline-flex rounded-3xl shadow-md overflow-hidden" role="group">
                                    <button onClick={()=>console.log("hi")} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                        -
                                    </button>
                                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white">
                                    1
                                    </button>
                                    <button type="button" onClick={()=>console.log("hi")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-white  rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:z-10  focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                        +
                                    </button>
                                </div>
                    </div>
                    <div className='flex flex-col pl-8 text-lg font-bold'>total price:<span className='text-sm font-normal '>999999$</span></div>

                </figcaption>
            </figure>
        </div>
    )
}