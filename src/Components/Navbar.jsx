import { MdShoppingCart } from "react-icons/md"
import logo from "../assets/logo.png"
import { useState } from "react"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import ResponsiveNavbar from "./ResponsiveNavbar"
import { Link } from "react-router-dom"

export default function Navbar(){

    const [menu, setMenu] = useState(false)

    const toogle = () => {
        setMenu(!menu)
    }

    return(
        <div className="bg-[#000] px-4 fixed w-full z-50 shadow-sm top-0 shadow-orange-700">
            <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
                
                <Link to='/'>
                    <img src={logo} alt="logo" className="md:w-24 w-20" />
                </Link>

                <div className="flex items-center gap-5">
                    <nav className="hidden md:block">
                        <ul className="flex items-center font-semibold text-xl gap-7 text-[#fff]">
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/pizza'><li>Pizza</li></Link>
                            <Link to='/hamburguer'><li>Hambúrguer</li></Link>
                            <Link to='/drinks'><li>Drinks</li></Link>
                        </ul>
                    </nav>
                    <Link to='/cart' className="relative w-10">
                        <MdShoppingCart size={25} className="text-[#fff]" />
                        <div className="bg-red-500 w-5 absolute -top-2 right-1 items-center justify-center rounded-full text-[#fff] flex">0</div>
                    </Link>

                    {
                        menu ? (
                            <HiMenuAlt1 onClick={toogle} className="cursor-pointer transition-all md:hidden text-[#fff]" size={30} />
                        ):(
                            <HiMenuAlt3 onClick={toogle} size={30} className="cursor-pointer transition-all md:hidden text-[#fff]" />
                        )
                    }
                </div>
            </div>
            <ResponsiveNavbar menu={menu} setMenu={setMenu} />
        </div>
    )
}