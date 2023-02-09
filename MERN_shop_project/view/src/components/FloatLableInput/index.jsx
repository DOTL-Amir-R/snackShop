export function FloatLabelInput({
    type,
    // placeholder,
    labelText,
    classNameInput,
    classNameLabel,
    classNameContainer,
}) {
    return (

            <div className={`relative z-0 w-full  group ${classNameContainer}`}>
                <input
                    type={type}
                    name={'floating_' + type}
                    id={'floating_' + type}
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer ${classNameInput}`}
                    placeholder=" "
                    required
                />
                <label
                    htmlFor={'floating_' + type}
                    className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 peer-focus:translate-x-5  ${classNameLabel}`}
                >
                    {labelText}
                </label>
            </div>

    );
}
