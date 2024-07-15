import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo.svg'
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpenMenu = () => {
        setOpen(!open)
        document.body.style.overflowY = 'hidden'
    }
    const handleCloseMenu = () => {
        setOpen(!open)
        document.body.style.overflowY = 'auto'
    }
    return (
        <nav>
            <div className='py-5 flex items-center justify-between' >
                <div>
                    <button onClick={handleOpenMenu}>
                        <HiOutlineMenuAlt4 size={32} className="text-white" />
                    </button>
                    <div>
                        {open &&
                            <div className=" fixed w-screen h-screen top-0 left-0 bg-black z-30">
                                <div className=" px-5 md:px-10 lg:px-44 ">
                                    <div className="flex justify-between py-10">
                                        <div>
                                            <img src={logo} alt="" />
                                        </div>
                                        <button onClick={handleCloseMenu} className="bg-white p-2 rounded-full">
                                            <IoMdClose />
                                        </button>
                                    </div>
                                    <ul className="pt-10 text-white">
                                        <li>
                                            <a className="border-b-2 w-full block py-5 " href="#" onClick={handleCloseMenu}>
                                                H O M E
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border-b-2 w-full block py-5" href="#brand" onClick={handleCloseMenu}>
                                                B R A N D
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border-b-2 w-full block py-5" href="#cars" onClick={handleCloseMenu}>
                                                C A R S
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border-b-2 w-full block py-5" href="#services " onClick={handleCloseMenu}>
                                                S E R V I C E S
                                            </a>
                                        </li>
                                        <li>
                                            <a className="border-b-2 w-full block py-5" href="#reviews" onClick={handleCloseMenu}>
                                                R E V I E W S
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <button className="border-2 border-white rounded-full text-white px-5 py-1">
                    Login / Register
                </button>
            </div>
        </nav>
    )
}

export default Navbar