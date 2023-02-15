import { useState } from "react"

export function RadioCheckBox({onClick,textForCheckBox}) {
    return(
        <div className="flex items-center mr-4">
            <input onClick={onClick} id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300   dark:ring-offset-gray-800 focus:ring-transparent dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{textForCheckBox}</label>
        </div>
    )
}