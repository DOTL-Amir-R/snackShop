import { FaUser } from 'react-icons/fa';
import './index.css';

export function SignupHeader() {
    return (
        <nav className="px-4 container width-77-precent">
            <div className="flex justify-between   padd-top-bot-28 ">
                <div className="font-weight-700 font-size-27 py-2.5">ARMHA</div>
                <div className="flex items-center gap-1 px-4">
                    <FaUser size="1.2rem" />
                    log in
                </div>
            </div>
        </nav>
    );
}
