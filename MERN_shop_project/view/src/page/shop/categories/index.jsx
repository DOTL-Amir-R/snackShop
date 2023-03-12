import { Dropdown } from 'flowbite-react';

export function Categories() {
    return (
        <>
            <Dropdown label="Category" inline={true} >
                <div className=''>
                <Dropdown.Item>Vegeterian</Dropdown.Item>
                <Dropdown.Item>Free suger</Dropdown.Item>
                <Dropdown.Item>Heavy suger</Dropdown.Item>
                </div>

            </Dropdown>
        </>
    );
}
