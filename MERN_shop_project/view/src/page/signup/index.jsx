import { DetailBox } from './detailBox';
import { Forms } from './forms';
import { SignupHeader } from './header';

export function SignUp() {
    return (
        <div className='container '>
            <SignupHeader />
            <div className='flex mt-10 gap-31 justify-center'>
                <Forms />
            </div>
        </div>
    );
}
