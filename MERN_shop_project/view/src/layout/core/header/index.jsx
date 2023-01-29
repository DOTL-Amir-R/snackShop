import { svgObject } from '../../../assets/svg';
import {
    FaGift,
    FaQuestionCircle,
    FaUser,
    FaChevronDown,
} from 'react-icons/fa';
import './index.css';

export function Header() {
    return (
        <nav className="p-2.5 flex justify-between font-size-18 font-weight-400 container">
            <div className="flex gap-5 items-center">
                <div className="font-weight-700 font-size-27 p-2.5">ARMHA</div>
                <div>subscribe</div>
                <div>shop</div>
                <div>about</div>
                <div>gifts</div>
                <div>for business</div>
                <div className="flex items-center gap-1">
                    <FaGift size="1.2rem" />
                    rewards
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex items-center gap-1">
                    <FaQuestionCircle size="1.2rem" />
                    help
                </div>
                <div className="flex items-center gap-1">
                    <img src='https://cdn.shopify.com/s/files/1/0064/7652/9737/files/united-kingdom.svg?v=1584632335' width='15px' height='15px'/> uk
                    <FaChevronDown size="1.2rem" />
                </div>
                <div className="flex items-center gap-1">
                    <FaUser size="1.2rem" />
                    log in
                </div>
            </div>
        </nav>
    );
}
