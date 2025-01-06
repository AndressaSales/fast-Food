import React from 'react'
import banner from "../assets/backgroundHome.png"

function BannerHome() {
    return (
        <div className='bg-gray-800 pt-40'>
            <div className='relative max-w-7xl mx-auto pt-20 bg-cover md:rounded-2xl bg-center h-[550px] md:[600px]' style={{backgroundImage: `url(${banner})`}}>
                <div className='absolute inset-0 bg-orange-500 md:rounded-2xl bg-opacity-50 items-center flex justify-center'>
                    <div className='text-center text-[#fff] px-4'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Burger Dev</h1>
                        <p className='text-lg md:text-xl mb-6'>Os Melhores da Região</p>
                        <button className='bg-[#f00] hover:bg-red-600 text-[#fff] font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Compre Agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHome
