import { useState } from "react";
import { ButtonGradiantOutLine } from "../../../components/shared/ButtonGradiantOutLine";
import { FloatInputSecond } from "../../../components/shared/FloatInputSecond";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { mainInstance } from './../../../api/constants.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { creatProductService } from "./../../../api/services";

const productSchema =  yup.object({
    name: yup.string().required(),
    price: yup.string().required(),
    count: yup.string().required(),
    weight: yup.string().required(),
    desc: yup.string().required(),
    category: yup.string().required(),
  });

export function Forms() {
    const [file , setFile ] =useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(productSchema)});
    
    const handelCreatProduct = async (data) => {
        let formData = new FormData()
        formData.append("name" , data.name)
        formData.append("price" , data.price)
        formData.append("count" , data.count)
        formData.append("weight" , data.weight)
        formData.append("desc" , data.desc)
        formData.append("category" , data.category)
        formData.append("picture" , file)
        try {
            const res = await creatProductService(formData)
            toast.success(res.data.massage);
        } catch (error) {
            toast.error(error.response.data.massage);
        }
    }
    return(
        <form className="flex flex-col width-58-percent container items-center" onSubmit={handleSubmit(handelCreatProduct)}>
            <ToastContainer/>
            <input label='picture of product' type='file' onChange={(e)=>{setFile(e.target.files[0])}}/>
            <FloatInputSecond label='name of product' type='text' register = {{...register("name")}}/>
            <FloatInputSecond label='price of product' type='text' register = {{...register("price")}}/>
            <FloatInputSecond label='count of product' type='text' register = {{...register("count")}}/>
            <FloatInputSecond label='category of product' type='text' register = {{...register("category")}}/>
            <FloatInputSecond label='weight of product' type='text' register = {{...register("weight")}}/>
            <textarea className='w-full border-gray-300 h-72 my-4' placeholder='desc of product' {...register("desc")} />
            <ButtonGradiantOutLine text='Submit' onClick={()=>{
                console.log('clicked')
            }}/>
        </form>
    )
}