import './index.css';
import iconImage from '../../../assets/img/Punnet-Flapjack-Limited-Edition.webp';
import { BasketCard } from '../BasketCard';


export function BasketProduct() {
    return (
        <>
        
            <div className="col-span-3 flex flex-col">
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
            </div>
        </>
    );
}
