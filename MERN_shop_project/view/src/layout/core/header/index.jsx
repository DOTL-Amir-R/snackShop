// import { svgObject } from '../../../assets/svg';
import {
    FaUser,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './index.css';

export function Header() {
    const navigate = useNavigate()
    return (
        <nav className="padd-top-bot-22  flex justify-between font-size-18 font-weight-400 container">
            <div className="flex gap-5 items-center">
                <div className="font-weight-700 font-size-27 py-2.5">ARMHA</div>
                <button onClick={()=>navigate('/')}>Home</button>
                <button onClick={()=>navigate('/shop')}>Shop</button>
                <button onClick={()=>navigate('/sellyourproduct')}>Sell your product</button>

            </div>
            <div className="flex gap-5 items-center">
                <button onClick={()=>navigate('/login')} className="flex items-center gap-1">
                    <FaUser size="1.2rem" />
                    log in
                </button>
                <button onClick={()=>navigate('/signup')} className="flex items-center gap-1">

                    Sign up
                </button>
            </div>
        </nav>
    );
}
