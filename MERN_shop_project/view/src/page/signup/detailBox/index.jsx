import { Input } from '@material-tailwind/react';
import SnackBoxIcon from '../../../assets/img/snackBoxIcon.jpg';
import { FaTag } from 'react-icons/fa';
import './index.css';

export function DetailBox() {
    return (
        <div className="flex flex-col width-24-percent ">
            <div className='flex  p-3'>
                <img className="snack-box-icon" src={SnackBoxIcon} />
                <div className='flex flex-col ml-3 justify-between'>
                    <div className='text-xs color-gray-9b9b9b font-medium'> YOU'VE SELECTED</div>
                    <div className='font-bold text-2xl'>variety box</div>
                </div>
                <div className='ml-12 text-sm mt-9'>Change</div>
            </div>
            <div className='mt-6 flex flex-col p-4 border-1-color-ddd rounded-2xl'>
                <div className='flex justify-center items-center p-3 mx-11 mb-11 background-color-light-green-ceeddc border-radius-10'>
                    <FaTag  className='transform-scale-x-mines-one color-green-0aa550'/>
                    <div className='text-sm font-medium color-green-0aa550 ml-2' >1st box half price (£2.49)</div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-lg font-normal'>Subtotal</div>
                    <div className='flex '>
                        <div className='color-gray-7a7a7a mr-2 text-lg'>£4.99</div>
                        <div className='text-lg font-semibold color-orange-fa701f'>£2.49</div>
                    </div>
                </div>
                <div className='flex justify-between mt-4 mb-6'>
                    <div className='text-lg font-normal'>Delivery</div>
                    <div className='text-base orange-container-small'>FREE</div>
                </div>
                <div className='flex justify-between pt-4  border-top-1-color-ddd'>
                    <div className='text-lg font-bold'>Total for 1st box</div>
                    <div className='text-lg font-bold'>£2.49</div>
                </div>
            </div>
            <div className='flex self-center mt-4 mb-6 text-sm'>The price of your next box is £4.99</div>
            <Input variant="outlined"  color="red" label="add your Code" />
        </div>
    );
}
