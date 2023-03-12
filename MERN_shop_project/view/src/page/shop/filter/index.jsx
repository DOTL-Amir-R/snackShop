import { Dropdown } from 'flowbite-react';

export function Filter() {
    return (
        <>
            <Dropdown label="Filter" inline={true}>

                    <Dropdown.Item>Sort by low to high price</Dropdown.Item>
                    <Dropdown.Item>Sort by weight</Dropdown.Item>
                    <Dropdown.Item>Sort by high to low price</Dropdown.Item>
            </Dropdown>
        </>
    );
}
