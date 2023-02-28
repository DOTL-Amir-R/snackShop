import './index.css';
import iconImage from '../../../assets/img/Punnet-Flapjack-Limited-Edition.webp';
import { BasketCard } from '../BasketCard';


export function BasketProduct() {
    return (
        <>
        
            <div className="flex flex-col w-4/5 container">
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
