import { DetailBox } from './detailBox';
import { Forms } from './forms';
import { SignupHeader } from './header';

export function SignUp() {
    return (
        <div className='container'>
            <SignupHeader />
            <div className='flex'>
                <Forms />
                <DetailBox />
            </div>
        </div>
    );
}
