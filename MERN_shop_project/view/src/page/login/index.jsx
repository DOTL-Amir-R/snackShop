import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import { handelLoginService } from './../../api/services';

const loginSchema =  yup.object({
    email: yup.string().email().required(),
    password: yup.number().positive().integer().required(),
  }).required();

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(loginSchema)});
    const handelLogin = async (data) => {
        try{
            const res = handelLoginService(data)
            toast.success("loggin in was sucessfully!?")
            console.log();
            Cookies.set('token' , res.data.token , { expires: 7 })
            navigate("/")
        }
        catch(err) {
            toast.error(err.response.data.massage)
        }
    }
    return (
        <div className='flex justify-center py-12 bg-neutral-50'>
            <ToastContainer/>
            <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(handelLogin)}>
                    <h5 className="text-2xl font-medium text-gray-700 dark:text-white">log in to graze</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">email address</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="you@example.com" {...register("email")}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">password</label>
                        <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" {...register("password")} />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm hover:underline underline">forgotten your password?</a>
                    </div>
                    <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">log in</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 border-y py-5">
                        not yet grazing?  <Link to="/signup" className="text-green-500 underline hover:underline ">get started</Link>
                    </div>
                    <p className='text-sm'>This site is protected by reCAPTCHA and the Google <a className='underline font-bold' href="https://policies.google.com/privacy">Privacy Policy</a> and <a className='underline font-bold' href='https://policies.google.com/terms'>Terms of Service</a></p>
                </form>
            </div>
        </div>


    )
}

export default Login
