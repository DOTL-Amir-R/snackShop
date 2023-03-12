import { Dropdown } from 'flowbite-react';

export function SortByMenu() {
    return (
        <>
            <Dropdown label="Sort by" inline={true} >
                <div className=''>
                    <Dropdown.Item>Sort by low to high price</Dropdown.Item>
                    <Dropdown.Item>Sort by weight</Dropdown.Item>
                    <Dropdown.Item>Sort by high to low price</Dropdown.Item>
                    <Dropdown.Item>most popular</Dropdown.Item>
                    <Dropdown.Item>less popular</Dropdown.Item>
                    <Dropdown.Item>most visted</Dropdown.Item>
                </div>
            </Dropdown>
        </>
    );
}
