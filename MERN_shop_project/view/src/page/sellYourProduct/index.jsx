import { Footer } from '../../layout/core/footer';
import { Header } from '../../layout/core/header';
import { Forms } from './forms';

export function SellYourProduct() {
    return (
        <div className='flex flex-col gap-12'>
            <Header />
            <Forms />
            <Footer />
        </div>
    );
}
