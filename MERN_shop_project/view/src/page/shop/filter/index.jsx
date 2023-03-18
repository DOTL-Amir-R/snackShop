import { RangeInput } from '../../../components/shared/RangeInput';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import './index.css';
import { handleSortProduct } from '../../../api/services';
export function Filter({setData,filteredCategoryData}) {
    const [test, setTest] = useState(true);
    const [inputValue, setInputValue] = useState();
    return (
        <>
            {/* <Dropdown label="Filter" inline={true}>

                    <Dropdown.Item >
                        <RangeInput/></Dropdown.Item>

                    <Dropdown.Item>Sort by weight</Dropdown.Item>
                    <Dropdown.Item>Sort by high to low price</Dropdown.Item>
            </Dropdown> */}
            <div className="flex flex-col items-center relative">
                <div
                    className="text-white  bg-green-500 hover:bg-green-600 cursor-pointer ml-4 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                    onClick={() => {
                        setTest(!test);
                    }}
                >
                    Filter
                </div>
                <div
                    className="absolute top-14 drop-down-filter "
                    style={
                        test
                            ? { display: 'none' }
                            : { display: 'flex', flexDirection: 'column' }
                    }
                >
                    <div className="text-center">
                        {inputValue ?'more than '+ inputValue + '$' : 'more than 1000$'}
                        <RangeInput
                            onChange={(e) => {
                                

                                setTimeout(() => {
                                    const filteredPrice = e.target.value
                                    console.log(filteredPrice)
                                    setInputValue(filteredPrice);
                                    return handleSortProduct({filterMethod:'moreThanMethod',filteredCategoryData,filteredPrice}).then((res)=>{
                                        // setData(res.data.sortedProductExpensive)
                                        console.log(res.data)
                    
                                    })
                                }, 3000);

                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
