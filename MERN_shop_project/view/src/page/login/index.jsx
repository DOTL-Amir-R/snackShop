import React from 'react'

function Login() {
    return (
        <div className='flex justify-center py-12 bg-neutral-50'>
            <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-2xl font-medium text-gray-700 dark:text-white">log in to graze</h5>
                    <div>
                        <label for="email" className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">email address</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-lg font-medium text-gray-700 dark:text-white">password</label>
                        <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-300 focus:border-green-400 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm hover:underline underline">forgotten your password?</a>
                    </div>
                    <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">log in</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 border-y py-5">
                        not yet grazing?  <a href="#" className="text-green-500 underline hover:underline dark:text-green-500">get started</a>
                    </div>
                    <p className='text-sm'>This site is protected by reCAPTCHA and the Google <a className='underline font-bold' href="https://policies.google.com/privacy">Privacy Policy</a> and <a className='underline font-bold' href='https://policies.google.com/terms'>Terms of Service</a></p>
                </form>
            </div>
        </div>


    )
}

export default Login
