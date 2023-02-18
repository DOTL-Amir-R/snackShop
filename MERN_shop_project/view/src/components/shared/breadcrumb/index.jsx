import React from 'react'

function Breadcrumb() {
    return (
        <nav className="flex p-4 container" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm text-gray-800 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white font-bold">
                        Shop
                    </a>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        /
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">new</span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb
