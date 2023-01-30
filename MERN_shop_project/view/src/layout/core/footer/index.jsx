
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import '../../global/index.css';

export function Footer() {
    return(
        <div className='flex flex-col container'>
            <div className='flex justify-center'>
                <FaFacebook className='color-green-85BB23 font-size-32'/>
                <FaTwitter className='color-green-85BB23 font-size-32'/>
                <FaInstagram className='color-green-85BB23 font-size-32'/>
            </div>

            <div className='flex justify-around flex-wrap font-size-18 font-weight-400'>
                <div >
                    careers
                </div>
                <div>
                    how it works
                </div>
                <div>
                    health
                </div>
                <div>
                    gifts
                </div>
                <div>
                    in stores
                </div>
                <div>
                    help
                </div>
            </div>
            <div className='flex gap-5 justify-center flex-wrap font-size-18 font-weight-400 color-gray-7a7a7a'>
                <div>
                    terms
                </div>
                <div>
                    privacy
                </div>
                <div>
                    cookies
                </div>
                <div>
                    modern slavery statement
                </div>
                <div>
                    key worker discount - subscription
                </div>
                <div>
                    students
                </div>
                <div>
                    getin touch
                </div>
                <div>
                    press
                </div>
            </div>
            <div className='flex justify-center'>
                LOGO
            </div>
            <div className='flex items-center justify-center font-size-18 font-weight-400 color-gray-7a7a7a'>
                <FaCopyright/>2023 nature delivered ltd
            </div>
            <div className='flex justify-center font-size-18 font-weight-400 color-gray-7a7a7a' >
                cookie preferences
            </div>
        </div>
    )
}