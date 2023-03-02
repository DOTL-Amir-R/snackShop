import { Input } from '@material-tailwind/react';
import { FloatLabelInput, RadioCheckBox } from '../../../components';
import { FaTag, FaChevronRight, FaCheck, FaCircle } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import './index.css';
import { Radio, useRadioState } from 'pretty-checkbox-react';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { mainInstance } from './../../../api/constants.js';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const signInSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required();

export function Forms() {
    const navigate = useNavigate()
    const [yesOrNo, setYesOrNo] = useState(true);
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(signInSchema) });
    const submitForm = async (data) => {
        try {
            const res = await mainInstance.post("/signIn", data)
            toast.success("accout created!?")
            navigate("/login")
        } catch (err) {
            toast.error(err.response.data.massage)
        }
    }
    return (
        <div className="flex flex-col width-58-percent  pl-8">
            <ToastContainer/>
            <div className="text-2xl font-medium">tell us about you…</div>
            <div className="m-10 flex flex-col">
                <div className="text-lg my-2.5 color-black-444">
                    Let’s set up your account, so you can tailor your
                    preferences and we can send you the perfect box!
                </div>
                <form onSubmit={handleSubmit(submitForm)}>
                    <FloatLabelInput
                        type="text"
                        labelText="first name"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                        register = {register("firstName")}
                    />
                    <FloatLabelInput
                        type="text"
                        labelText="last name"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                        register = {register("lastName")}
                    />
                    <FloatLabelInput
                        type="email"
                        labelText="email"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                        register = {register("email")}
                    />
                    <FloatLabelInput
                        type="password"
                        labelText="password"
                        classNameLabel="text-lg color-black-444 input-label-classes "
                        classNameInput="border-none input-classes"
                        classNameContainer="pb-7"
                        register = {register("password")}
                    />
                    <div className="pb-2.5 text-lg font-medium">
                        do you have any allergies?
                    </div>
                    <div>
                        <div className="flex">
                            {yesOrNo ? (
                                <div className="registration-check-box02 flex gap-1 items-center text-lg py-2 pl-5 pr-4 my-2 mr-2 rounded-xl border-1-color-ddd">
                                    <FaCheck color="#a4c433" />
                                    No
                                </div>
                            ) : (
                                <RadioCheckBox
                                    onClick={() => {
                                        setYesOrNo(!yesOrNo);
                                    }}
                                    textForCheckBox="No"
                                    {...register("password")}
                                    inputClassName="registration-check-box02 py-2 pl-5 pr-4 my-2 mr-2 rounded-xl border-1-color-ddd"
                                />
                            )}
                            {!yesOrNo ? (
                                <div className="registration-check-box flex gap-1 items-center text-lg py-2 pl-5 pr-4 my-2 mr-2 rounded-xl border-1-color-ddd">
                                    <FaCheck color="#a4c433" fontStyle="normal" />
                                    Yes
                                </div>
                            ) : (
                                <RadioCheckBox
                                    onClick={() => {
                                        setYesOrNo(!yesOrNo);
                                    }}
                                    textForCheckBox="Yes"
                                    inputClassName="registration-check-box02 py-2 pl-5 pr-4 my-2 mr-2 rounded-xl border-1-color-ddd"
                                />
                            )}
                        </div>
                    </div>
                    <div className='text-lg text-underline mb-5 flex items-center'>more info<FaChevronRight /></div>
                    <div>
                        <button type='submit' className='green-button-registration flex items-center text-lg gap-2.5 pr-2.5 py-1.5 pl-4  background-color-0AA550 border-2-0AA550 color-fff border-radius-25'><div>continue</div><FaChevronRight /></button>
                    </div>
                </form>
                <div className=' mt-7 ml-5'>
                    Receive exclusive offers, delicious rewards and brand new
                    snack launches to your email inbox.
                </div>
                <div className='mb-5 mt-5 ml-5'>
                    <p className='my-2.5'>Please read our Privacy
                        Notice to understand how we use your personal data.</p>
                    <p className='my-2.5'>
                        By
                        clicking ‘continue’ you are confirming that you are over 16
                        years old.
                    </p>
                </div>
            </div>
        </div>
    );
}
