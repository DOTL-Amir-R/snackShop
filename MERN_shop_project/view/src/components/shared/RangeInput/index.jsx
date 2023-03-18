export function RangeInput({onChange}) {
    return(
        <>
            {/* <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min-max range</label> */}
            <input onChange={(e)=>(
                onChange(e)
            )} id="minmax-range"  type="range" min="1000" max="10000"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
        </>
    )
}