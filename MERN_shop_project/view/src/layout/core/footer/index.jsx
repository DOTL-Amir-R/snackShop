
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import '../../global/index.css';

export function Footer() {
    const navigate = useNavigate()
    return(
        <div className='flex flex-col container'>
            <div className='flex justify-center gap-2.5 pb-5'>
                <FaFacebook className='color-green-85BB23 font-size-32'/>
                <FaTwitter className='color-green-85BB23 font-size-32'/>
                <FaInstagram className='color-green-85BB23 font-size-32'/>
            </div>

            <div className='flex justify-around flex-wrap font-size-18 font-weight-400 border-top-1-color-ddd border-bot-1-color-ddd padd-top-bot-12'>
                {/* <div className='mouse-pointer'>
                    careers
                </div> */}
                {/* <div className='mouse-pointer'>
                    how it works
                </div> */}
                {/* <div className='mouse-pointer'>
                    health
                </div> */}
                {/* <div className='mouse-pointer'>
                    gifts
                </div> */}
                {/* <div className='mouse-pointer'>
                    in stores
                </div> */}
                <button onClick={()=>{navigate('/about')}} className='mouse-pointer'>
                    about
                </button >
                <button onClick={()=>{navigate('/shop')}} className='mouse-pointer'>
                    in stores
                </button >
                <button onClick={()=>{navigate('/')}} className='mouse-pointer'>
                    Homes
                </button >
                <button onClick={()=>{navigate('/help')}} className='mouse-pointer'>
                    Help
                </button >
            </div>
            <div className='flex gap-5 justify-center flex-wrap font-size-18 font-weight-400 color-gray-7a7a7a pt-5'>
                {/* <div className='mouse-pointer'>
                    terms
                </div>
                <div className='mouse-pointer'>
                    privacy
                </div>
                <div className='mouse-pointer'>
                    cookies
                </div>
                <div className='mouse-pointer'>
                    modern slavery statement
                </div>
                <div className='mouse-pointer'>
                    key worker discount - subscription
                </div>
                <div className='mouse-pointer'>
                    students
                </div>
                <div className='mouse-pointer'>
                    getin touch
                </div>
                <div className='mouse-pointer'>
                    press
                </div> */}
            </div>
            <div className='flex justify-center pt-2.5'>
                LOGO
            </div>
            <div className='flex items-center justify-center font-size-18 font-weight-400 color-gray-7a7a7a pt-2.5'>
                <FaCopyright/>2023 nature delivered ltd
            </div>
            <div className='flex justify-center font-size-18 font-weight-400 color-gray-7a7a7a mouse-pointer py-2.5' >
                cookie preferences
            </div>
        </div>
    )
}