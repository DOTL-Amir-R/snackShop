import { RangeInput } from '../../../components/shared/RangeInput';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';
import './index.css';
import { handleSortProduct } from '../../../api/services';
export function Filter({ setData, filteredCategoryData }) {
    const [minimumPrice, setMinimumPrice] = useState('');
    const [maximumPrice, setMaximumPrice] = useState('');
    const [hoverOrNot, setHoverOrNot] = useState(true);
    return (
        <>
            <div className="flex flex-col items-center relative">
                <div
                    className="text-white  bg-green-500 hover:bg-green-600 cursor-pointer ml-4 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                    onClick={() => {
                        setHoverOrNot(!hoverOrNot);
                    }}
                >
                    Filter
                </div>
                <div
                    className="absolute top-14 drop-down-filter "
                    style={
                        hoverOrNot
                            ? { display: 'none' }
                            : { display: 'flex', flexDirection: 'row' }
                    }
                >
                    <div className="text-center">
                        {minimumPrice ? minimumPrice + '$' : '1000$'}
                        <RangeInput
                            defaultValue="1000"
                            min="1000"
                            max="5000"
                            onClick={(e) => {
                                setMinimumPrice(e.target.value);

                                setTimeout(() => {
                                    return handleSortProduct({
                                        filterMethod: 'minMaxPrice',
                                        filteredCategoryData,
                                        minimumPrice: e.target.value,
                                    }).then((res) => {
                                        setData(res.data.filteredByMaxPrice);
                                    });
                                }, 3000);
                            }}
                        />
                    </div>
                    <div className="text-center">
                        {maximumPrice ? maximumPrice + '$' : '10000$'}
                        <RangeInput
                            defaultValue="10000"
                            min="5000"
                            max="10000"
                            onClick={(e) => {
                                setMaximumPrice(e.target.value);
                                setTimeout(() => {
                                    return handleSortProduct({
                                        filteredCategoryData,
                                        filterMethod: 'minMaxPrice',
                                        maximumPrice: e.target.value,
                                    }).then((res) => {
                                        setData(res.data.filteredByMaxPrice);
                                    });
                                }, 3000);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
