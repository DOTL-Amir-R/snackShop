import { Dropdown } from 'flowbite-react';

export function SortByMenu() {
    return (
        <>
            <Dropdown label="sort by" inline={true} >
                <div className='flex'>
                    <Dropdown.Item>Sort by low to high price</Dropdown.Item>
                    <Dropdown.Item>Sort by weight</Dropdown.Item>
                    <Dropdown.Item>Sort by high to low price</Dropdown.Item>
                </div>
            </Dropdown>
        </>
    );
}
