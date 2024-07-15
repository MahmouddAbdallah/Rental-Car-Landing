import axios from 'axios';
import { useEffect, useState } from 'react';
const Brands = () => {
    const [brands, setBrands] = useState([]);
    const fetchBrands = async () => {
        try {
            const { data } = await axios.get('../Data/brands.json');
            setBrands(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchBrands();
    }, []);
    return (
        <section id='brand' className='pt-32 pb-20'>
            <div className='px-5 md:px-10 lg:px-44'>
                <div className='grid grid-cols-12 gap-5'>
                    {
                        brands.map(item =>
                            <div
                                className=' bg-black/5 rounded-lg py-5 col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2'
                                key={item.id} >
                                <div className='flex flex-col gap-3 items-center justify-center'>
                                    <div>
                                        <img className='w-12 h-12 object-contain' src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <span className='font-semibold'>
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </section>
    )
}

export default Brands