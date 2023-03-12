import { handleSortProduct } from '../../../api/services';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';


export function SortByMenu() {
    const [sortByText, setSortByText] = useState('');
    function handleSortBy(e) {
        console.log(e.target.innerText)
        const id = e.target.innerText;
        switch (id) {
            case 'Sort by most expensive':
                handleSortProduct({sortBy:'expensive'})
                return setSortByText('most expensive');
            case 'Sort by Heavier Weight':
                handleSortProduct({sortBy:'heavierWeight'})
                return setSortByText('Heavier Weight');
            case 'Sort by Cheapest':
                handleSortProduct({sortBy:'cheapest'})
                return setSortByText('Cheapest');
            case 'most popular':
                handleSortProduct({sortBy:'mostPopular'})
                return setSortByText('most popular');
            case 'less popular':
                handleSortProduct({sortBy:'lessPopular'})
                return setSortByText('less popular');
            default:
                return null;
        }
    }
    return (
        <>
        <div onClick={(e)=>{
            handleSortBy(e)
        }}>
        <Dropdown label={sortByText?sortByText:'Standard'} inline={true}>
                <div className="">
                    <Dropdown.Item>Sort by most expensive</Dropdown.Item>
                    <Dropdown.Item>Sort by Heavier Weight</Dropdown.Item>
                    <Dropdown.Item>Sort by Cheapest</Dropdown.Item>
                    <Dropdown.Item>most popular</Dropdown.Item>
                    <Dropdown.Item>less popular</Dropdown.Item>
                </div>
            </Dropdown>
        </div>

        </>
    );
}
