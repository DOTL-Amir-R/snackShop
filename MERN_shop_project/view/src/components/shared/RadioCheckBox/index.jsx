import { useState } from "react"

export function RadioCheckBox({onClick,textForCheckBox,inputClassName}) {
    return(
        <div onClick={onClick} className={`flex gap-1 items-center ${inputClassName}`}>
            <input  id="red-radio" type="radio" value="" name="colored-radio" className={`w-4 h-4 text-red-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800 focus:ring-transparent dark:bg-gray-700 dark:border-gray-600 `}/>
            <label htmlFor="red-radio" className=" text-lg ">{textForCheckBox}</label>
        </div>
    )
}