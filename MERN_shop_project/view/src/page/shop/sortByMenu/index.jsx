import { handleSortProduct } from '../../../api/services';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';


export function SortByMenu({setData,data}) {
    
    const [sortByText, setSortByText] = useState('');
    async function  handleSortBy(e) {
        const id = e.target.innerText;
        switch (id) {
            case 'Sort by most expensive':  
            // console.log(data)
                setSortByText('most expensive');
                return handleSortProduct({sortBy:'expensive',data}).then((res)=>{
                    setData(res.data.sortedProductExpensive)

                })
                
            // case 'Sort by Heavier Weight':
            //     setSortByText('Heavier Weight');
            //     return handleSortProduct({sortBy:'heavierWeight'}).then((res)=>{console.log(res.data.sortedProductHeavierWeight) ,setData( res.data.sortedProductHeavierWeight)})

            case 'Sort by Cheapest':
                setSortByText('Cheapest');
                return handleSortProduct({sortBy:'cheapest',data}).then((res)=>{setData( res.data.sortedProduct)})

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
        <>
        <div onClick={ (e)=>{
            handleSortBy(e)
        }}>
        <Dropdown label={sortByText?sortByText:'Standard'} inline={true}>
                <div className="">
                    <Dropdown.Item>Sort by most expensive</Dropdown.Item>
                    {/* <Dropdown.Item>Sort by Heavier Weight</Dropdown.Item> */}
                    <Dropdown.Item>Sort by Cheapest</Dropdown.Item>
                    {/* <Dropdown.Item>most popular</Dropdown.Item>
                    <Dropdown.Item>less popular</Dropdown.Item> */}
                </div>
            </Dropdown>
        </div>

        </>
    );
}
