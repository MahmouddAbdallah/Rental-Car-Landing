import { IoIosSearch, IoMdHappy } from "react-icons/io";
import { LuCalendarCheck } from "react-icons/lu";
import jeep from '../assets/jeep.png';
const HowitWork = () => {
    const howWork = [
        {
            icon: <IoIosSearch size={22} />,
            title: 'Browse and select',
            p: 'Choose from our wide range of premium cars, select the pickup and return dates and location that suit you best.'
        },
        {
            icon: <LuCalendarCheck size={22} />,
            title: 'Book and confirm',
            p: 'Book your desired car with just afew clicks and recieve an instant confirmation via email or SMS'
        },
        {
            icon: <IoMdHappy size={22} />,
            title: 'Enjoy your ride',
            p: 'Pick up your car at the designated location and enjoy your premium driving experience with out top-quality services.'
        },
    ]
    return (
        <section className="px-5 md:px-10 lg:px-44 py-20">
            <div className="text-center space-y-5">
                <h3 className="text-3xl lg:text-4xl font-bold">How it works</h3>
                <div className="md:px-32 lg:px-72">
                    <p className="font-semibold text-sm">
                        Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online
                    </p>
                </div>
            </div>
            <div className="py-20 flex flex-col-reverse lg:grid grid-cols-12 gap-10">
                <div className="col-span-6 space-y-10 my-auto">
                    {howWork.map(item =>
                        <div key={item.title}>
                            <div className="flex gap-5 border-2 rounded-lg ">
                                <div className=" flex items-center px-3 ">
                                    <div className="py-6 px-3 bg-black/5 rounded-xl">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="py-3 pr-5 space-y-2">
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-sm font-semibold">{item.p}</p>
                                </div>
                            </div>
                        </div>)}
                </div>
                <div className="col-span-6  bg-black/5 rounded-2xl px-20 py-32">
                    <img src={jeep} alt="" />
                </div>
            </div>
        </section>
    )
}

export default HowitWork