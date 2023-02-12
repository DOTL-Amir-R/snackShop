import { Input } from '@material-tailwind/react';
import { FloatLabelInput, RadioCheckBox } from '../../../components';
import { FaTag, FaCheckCircle, FaCheck, FaCircle } from 'react-icons/fa';
import './index.css';
import { Radio, useRadioState } from 'pretty-checkbox-react';
import { useState } from 'react';

export function Forms() {
    const [yesOrNo, setYesOrNo] = useState(true);
    return (
        <div className="flex flex-col width-58-percent  pl-8">
            <div className="text-2xl font-medium">tell us about you…</div>
            <div className="m-10 flex flex-col">
                <div className="text-lg my-2.5 color-black-444">
                    Let’s set up your account, so you can tailor your
                    preferences and we can send you the perfect box!
                </div>
                <form>
                    <FloatLabelInput
                        type="text"
                        labelText="first name"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                    />
                    <FloatLabelInput
                        type="text"
                        labelText="last name"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                    />
                    <FloatLabelInput
                        type="email"
                        labelText="email"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                    />
                    <FloatLabelInput
                        type="password"
                        labelText="password"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                    />
                </form>

                <div className="pb-2.5 text-lg font-medium">
                    do you have any allergies?
                </div>
                <div>
                    <div className="flex gap-5">
                        {yesOrNo ? (
                            <div className='flex gap-1'>
                                <FaCheck />
                                Yes
                            </div>
                        ) : (
                            <RadioCheckBox onClick={() => {setYesOrNo(!yesOrNo);}} textForCheckBox='Yes'/>

                        )}
                        {!yesOrNo ? (
                            <div className='flex gap-1'>
                                <FaCheck />
                                No
                            </div>
                        ) : (
                            <RadioCheckBox onClick={() => {setYesOrNo(!yesOrNo);}} textForCheckBox='No'/>
                        )}
                    </div>
                </div>

                <div>more info</div>
                <button>Continue</button>
                <div>
                    Receive exclusive offers, delicious rewards and brand new
                    snack launches to your email inbox. Please read our Privacy
                    Notice to understand how we use your personal data. By
                    clicking ‘continue’ you are confirming that you are over 16
                    years old.
                </div>
            </div>
        </div>
    );
}
