import {svgObject} from '../../../assets/svg'
import { FaGift , FaQuestionCircle ,  FaUser ,FaChevronDown } from 'react-icons/fa'


export function Header() {
    return (
        <div className="flex justify-between">
            <div className="flex gap-5">
                <div>ARDOTL</div>
                <div>subscribe</div>
                <div>ARDOTL</div>
                <div>subscribe</div>
                <div>shop</div>
                <div>about</div>
                <div>gifts</div>
                <div>for business</div>
                <div className='flex'><FaGift size='1.2rem' />rewards</div>
            </div>
            <div className="flex gap-5">
                <div className='flex'><FaQuestionCircle size='1.2rem' />help</div>
                <div className='flex'> {svgObject.unitedKingdom} uk<FaChevronDown size='1.2rem'/></div>
                <div className='flex'> <FaUser  size='1.2rem' />log in</div>
            </div>
        </div>
    );
}
