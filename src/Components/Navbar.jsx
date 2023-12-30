import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='p-5 pb-0 flex flex-warp sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
           <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <p>
                    GOOGLE 🔍
                </p>
            </Link>
            </div> 
            
        </div>
    )
}

export default Navbar
