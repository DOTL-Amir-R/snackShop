import iconImage from '../../../assets/img/Punnet-Flapjack-Limited-Edition.webp'
import './index.css'
import {
    FaGift,
    FaQuestionCircle,
    FaUser,
    
} from 'react-icons/fa';
import { MenuItemsProfile } from './MenuItemsProfile';

export function ProfileMenuSidebar() {
    return(
        <>
            <div className="mx-5 pb-5 w-1/4 rounded-lg flex flex-col justify-start items-center gap-2 profile-menu-container h-fit">
                <img className='user-icon ' src={iconImage}/>
                <div className='text-lg'>Amir_Raeisi</div>
                <div className='flex flex-col text-xl font-bold'>Your Wallet:<span className='flex self-center text-base font-bold text-emerald-500'>9999$</span></div>
                <div className='flex flex-col self-end gap-2'>
                    <MenuItemsProfile text='change your profile' icon={<FaUser className='ml-1.5 ' color='gray'/>}/>
                    <MenuItemsProfile text='your wallet' icon={<FaGift className='ml-1.5 ' color='gray'/>}/>
                    <MenuItemsProfile text='change your profile' icon={<FaUser className='ml-1.5 ' color='green'/>}/>
                    <MenuItemsProfile text='change your profile' icon={<FaUser className='ml-1.5 ' color='gray'/>}/>
                    <MenuItemsProfile text='change your profile' icon={<FaUser className='ml-1.5 ' color='gray'/>}/>
                    <MenuItemsProfile text='change your profile' icon={<FaUser className='ml-1.5 ' color='gray'/>}/>
                </div>

            </div>
        </>
    )
}