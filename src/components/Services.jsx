import { BsStars } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosBookmark } from "react-icons/io";
const Services = () => {
    const servicesData = [
        {
            icon: <BsStars size={30} className="text-black" />,
            title: "Affordable Prices",
            p: "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more."
        },
        {
            icon: <FaHandHoldingUsd size={30} className="text-black" />,
            title: "Quality Choice",
            p: "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank."
        },
        {
            icon: <IoIosBookmark size={30} className="text-black" />,
            title: "Convenient Online Booking",
            p: "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime."
        },
    ]
    return (
        <section id="services" className="px-5 md:px-10 lg:px-44 py-20 bg-black">
            <div className="text-center space-y-5 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold">Our Services & Benefits</h3>
                <div className="md:px-32 lg:px-72">
                    <p className="font-semibold text-sm">
                        To make renting easy and hassle-free,we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 space-y-10 lg:space-y-0 lg:gap-10 mt-14">
                {servicesData.map(item =>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white" key={item.p}>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-14 h-14 bg-white rounded-full flex j justify-center items-center">
                                {item.icon}
                            </div>
                            <div className="text-white text-center space-y-2">
                                <h3 className=" text-xl lg:text-2xl font-bold">{item.title}</h3>
                                <p className="text-sm">{item.p}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Services