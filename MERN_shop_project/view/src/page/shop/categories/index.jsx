import { handleSortProduct } from '../../../api/services';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export function Categories({ setData }) {
    const [sortByText, setSortByText] = useState('');
    async function handleSortBy(e) {
        const id = e.target.innerText;
        switch (id) {
            case 'Vegeterian':
                setSortByText('Vegeterian');
                return handleSortProduct({ sortBy: 'Vegeterian' }).then(
                    (res) => {
                        setData(res.data.sortedProductExpensive);
                    },
                );

            // case 'Sort by Heavier Weight':
            //     setSortByText('Heavier Weight');
            //     return handleSortProduct({sortBy:'heavierWeight'}).then((res)=>{console.log(res.data.sortedProductHeavierWeight) ,setData( res.data.sortedProductHeavierWeight)})

            case 'Free suger':
                setSortByText('Free suger');
                return handleSortProduct({ sortBy: 'Free suger' }).then(
                    (res) => {
                        setData(res.data.sortedProduct);
                    },
                );
            case 'Heavy suger':
                setSortByText('Heavy suger');
                return handleSortProduct({ sortBy: 'Heavy suger' }).then(
                    (res) => {
                        setData(res.data.sortedProduct);
                    },
                );

            // case 'most popular':
            //     handleSortProduct({sortBy:'mostPopular'})
            //     return setSortByText('most popular');
            // case 'less popular':
            //     handleSortProduct({sortBy:'lessPopular'})
            //     return setSortByText('less popular');
            default:
        }
    }
    return (
        <div
            onClick={(e) => {
                handleSortBy(e);
            }}
        >
            <Dropdown
                label={sortByText ? sortByText : 'Normal Category'}
                inline={true}
            >
                <div className="">
                    <Dropdown.Item>Vegeterian</Dropdown.Item>
                    <Dropdown.Item>Free suger</Dropdown.Item>
                    <Dropdown.Item>Heavy suger</Dropdown.Item>
                </div>
            </Dropdown>
        </div>
    );
}
