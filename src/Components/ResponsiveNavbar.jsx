import React from 'react'
import { Link } from 'react-router-dom'

function ResponsiveNavbar({menu, setMenu}) {
    return (
        <div className={`${menu ? "left-0" : "left-[100%] fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-[#000] px-8 pb-16 text-[#fff] md:hidden rounded-r-xl shadow-md"}`}>
            <div>
                <nav className='mt-12'>
                    <ul className='flex flex-col space-y-4 text-xl text-[#fff] font-bold'>
                        <Link to='/'><li onClick={() => setMenu(false)}>Home</li></Link>
                        <Link to='/pizza'><li onClick={() => setMenu(false)}>Pizza</li></Link>
                        <Link to='/hamburger'><li onClick={() => setMenu(false)}>Hambúrguer</li></Link>
                        <Link to='/drinks'><li onClick={() => setMenu(false)}>Drinks</li></Link>
                    </ul>
                </nav>
            </div>
            <div>
                <h1 className='font-bold text-white text-center text-xl'>Seja Bem-Vindo 🍔</h1>
            </div>
        </div>
    )
}

export default ResponsiveNavbar

