// import { svgObject } from '../../../assets/svg';
import {
    FaGift,
    FaQuestionCircle,
    FaUser,
    FaChevronDown,
} from 'react-icons/fa';
import './index.css';

export function Header() {
    return (
        <nav className="padd-top-bot-22  flex justify-between font-size-18 font-weight-400 container">
            <div className="flex gap-5 items-center">
                <div className="font-weight-700 font-size-27 py-2.5">ARMHA</div>
                <div>subscribe</div>
                <div>shop</div>
                <div>about</div>
                <div>gifts</div>
                <div>for business</div>
                <div className="flex items-center gap-1">
                    <FaGift className="color-red-fa6161" size="1.2rem" />
                    rewards
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="flex items-center gap-1">
                    <FaQuestionCircle size="1.2rem" />
                    help
                </div>
                <div className="flex items-center flex-col position-relative">
                    <div className="flex items-center gap-1 ">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0064/7652/9737/files/united-kingdom.svg?v=1584632335"
                            width="15px"
                            height="15px"
                        />
                        uk
                        <FaChevronDown size="0.75rem" />
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            right: '45px',
                            bottom: '-84px',
                            display: 'none',
                        }}
                    >
                        <div className="flex items-center gap-1">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0064/7652/9737/files/ireland.svg?v=1584632334"
                                width="15px"
                                height="15px"
                            />
                            irland
                        </div>
                        <div className="flex items-center gap-1">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0064/7652/9737/files/netherlands.svg?v=1584632334"
                                width="15px"
                                height="15px"
                            />
                            nederland
                        </div>
                        <div className="flex items-center gap-1">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0558/6118/2631/files/germany.svg?v=1630071157"
                                width="15px"
                                height="15px"
                            />
                            germany
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <FaUser size="1.2rem" />
                    log in
                </div>
            </div>
        </nav>
    );
}
