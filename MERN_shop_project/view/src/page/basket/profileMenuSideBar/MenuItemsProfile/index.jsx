import './index.css'

export function MenuItemsProfile({text,icon}) {
    return(
        <div className='flex items-center menu-style-profile-sidebar self-end text-lg font-medium'>{text}{icon}</div>
    )
}