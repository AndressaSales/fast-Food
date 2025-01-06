import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-gray-800 text-[#fff] py-10'>
            <div className='max-w-7xl mx-auto px-4 md:flex md:justify-center'>
                <div className='mb-6 md:mb-0'>
                    <h3 className='text-xl font-semibold'>Siga-nos</h3>
                    <div className='flex space-x-4 mt-2 text-xl'>
                        <FaFacebook className='hover:text-orange-600 hover:cursor-pointer'/>
                        <FaInstagram className='hover:text-orange-600 hover:cursor-pointer'/>
                        <FaTwitter className='hover:text-orange-600 hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='mt-8 border-t border-orange-600 pt-6 text-center text-sm'>
                <p> &copy;{new Date().getFullYear()} <span className='text-red-500'>Burger Dev</span> Todos dos diretitos reservados </p>
            </div>
        </div>
    )
}

export default Footer
