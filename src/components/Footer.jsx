import logo from '../assets/logo.svg'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-black px-5 md:px-10 lg:px-44 text-white py-10'>
            <div className='flex justify-between flex-wrap'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex gap-4 items-center'>
                    <li><FaFacebook size={22} className='text-white' /></li>
                    <li><PiInstagramLogoFill size={22} className='text-white' /></li>
                    <li><FaYoutube size={22} className='text-white' /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer