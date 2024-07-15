import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState, useRef, useEffect } from 'react'

const Reivews = () => {
    const [review, setReview] = useState([])
    const sliderRef = useRef();
    const slideRef = useRef();
    const [able, setAble] = useState(false)
    const fetchReviews = async () => {
        try {
            const { data } = await axios.get('../Data/review.json')
            setReview(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchReviews();
    }, []);
    const handleLeftBtn = () => {
        setAble(true)
        const slider = sliderRef.current;
        const slide = slideRef.current;
        slider.scrollLeft += slide.clientWidth;
    }
    const handleRightBtn = () => {
        setAble(true)
        const slider = sliderRef.current;
        const slide = slideRef.current;
        slider.scrollLeft -= slide.clientWidth;
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAble(false)
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }, [able])
    return (
        <section id='reviews' className='px-5 md:px-10 lg:px-44 py-20'>
            <div className='flex justify-between'>
                <h3 className='text-3xl lg:text-4xl font-bold'>What Our Customers Say</h3>
                <div className=' flex gap-3'>
                    <button disabled={able} onClick={handleRightBtn} className='w-12 h-12 rounded-full hover:bg-black text-black/50 hover:text-white duration-300 border-2 border-black/50 flex justify-center items-center'>
                        <FaArrowLeft />
                    </button>
                    <button disabled={able} onClick={handleLeftBtn} className='w-12 h-12 rounded-full hover:bg-black text-black/50 hover:text-white duration-300 border-2 border-black/50 flex justify-center items-center'>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex overflow-hidden scroll-smooth' ref={sliderRef}>
                {review.map(item =>
                    <div ref={slideRef} className='' key={item.id}>
                        <div className='w-[calc(100vw-40px)] md:w-[calc(100vw-80px)] lg:w-[calc(100vw-(176px*2))] pr-10 md:pr-32 lg:pr-52 py-10'>
                            <p className='text-lg font-semibold'>
                                {item.review}
                            </p>
                        </div>
                        <div className='flex gap-3'>
                            <img className='rounded-full w-14 h-14 object-cover' src={item.user.img} alt="" />
                            <div>
                                <h6 className='font-bold'>{item.user.name}</h6>
                                <span className='text-black/70'>From <span className='font-semibold'>{item.user.contury}</span></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Reivews