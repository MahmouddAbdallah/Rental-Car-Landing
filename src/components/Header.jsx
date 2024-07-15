import heroImg from '../assets/hero.png'
import Navbar from './Navbar'
import Search from './Search'
const Header = () => {
    return (
        <header className='bg-black px-5 md:px-10 lg:px-44'>
            <Navbar />
            <div className='py-32 lg:py-12'>
                <div className='lg:px-32 text-center'>
                    <h1 className='text-3xl lg:text-6xl text-white font-bold'>
                        Discover the world on wheels with our car rental service
                    </h1>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className='relative flex items-start lg:items-center lg:justify-center mb-80 lg:mb-0'>
                <div className='absolute -mt-32 lg:mt-0 w-full'>
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header