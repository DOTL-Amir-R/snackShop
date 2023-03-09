import { FaUser } from 'react-icons/fa';
import './index.css';
import LogoGrazeIcon from '../../../assets/svg/logoGraze.svg'
import { useNavigate } from 'react-router-dom';

export function SignupHeader() {
    const navigate = useNavigate()

    return (
        <nav className="px-4 container width-77-precent">
            <div className="flex justify-between   items-end ">
                <div className="font-weight-700 font-size-27 pt-3"><img className='w-2/4' src={LogoGrazeIcon} alt="" /></div>
                <button className="flex items-center gap-1 px-8 pb-4" onClick={()=>{
                    navigate('/login')
                }}>
                    <FaUser size="1.2rem" />
                    log in
                </button>
            </div>
        </nav>
    );
}
