import { FaUser } from 'react-icons/fa';
import './index.css';
import LogoGrazeIcon from '../../../assets/svg/logoGraze.svg'

export function SignupHeader() {
    return (
        <nav className="px-4 container width-77-precent">
            <div className="flex justify-between   items-end ">
                <div className="font-weight-700 font-size-27 pt-3"><img className='w-2/4' src={LogoGrazeIcon} alt="" /></div>
                <div className="flex items-center gap-1 px-8 pb-4">
                    <FaUser size="1.2rem" />
                    log in
                </div>
            </div>
        </nav>
    );
}
