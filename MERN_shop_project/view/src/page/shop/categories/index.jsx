import { handleSortProduct } from '../../../api/services';
import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export function Categories({ setData,setError }) {
    const [sortByText, setSortByText] = useState('');
    async function handleSortBy(e) {
        const id = e.target.innerText;
        switch (id) {
            case 'Vegeterian':
                setSortByText('Vegeterian');
                return handleSortProduct({ category: 'vegeterian' }).then(
                    (res) => {
                        console.log(res.data)
                        setData(res.data);
                    },
                );
            case 'Free suger':
                setSortByText('Free suger');
                return handleSortProduct({ category: 'Free suger' }).then(
                    (res) => {
                        setData(res.data);
                    },
                );
            case 'Heavy suger':
                setSortByText('Heavy suger');
                return handleSortProduct({ category: 'Heavy suger' }).then((res) => {
                    setData(res.data);
                  }).catch((er)=>{
                     const  error = er.response.data.message
                     setData([]);
                     setError(error) 
                  });
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
