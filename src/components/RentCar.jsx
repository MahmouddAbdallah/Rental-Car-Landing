import { PiEngineThin } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { LuFuel } from "react-icons/lu";
import axios from "axios";
import { useEffect, useState } from "react";

const RentCar = () => {
    const [cars, setCars] = useState([])
    const fetchCars = async () => {
        try {
            const { data } = await axios.get("../Data/cars.json");
            setCars(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchCars()
    }, [])

    return (
        <section id="cars" className="px-5 md:px-10 lg:px-44 bg-black/5 py-20">
            <div className="space-y-10" >
                <div className="text-center space-y-5">
                    <h3 className="text-3xl lg:text-4xl font-bold">Our Imperessive Collection of Cars</h3>
                    <div className="md:px-32 lg:px-72">
                        <p className="font-semibold text-sm">
                            Ranging from elegant sedans to powerful sports cars, all carefully selected to provide our customers with the ultimate driving experience.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    {
                        cars.map(car =>
                            <div className=" col-span-12 md:col-span-6 lg:col-span-4 group" key={car.id}>
                                <div className="p-2 rounded-2xl border-2 hover:border-black duration-300 cursor-pointer">
                                    <div>
                                        <img className="rounded-xl w-full" src={car.img} alt="" />
                                    </div>
                                    <div className="px-3 py-3">
                                        <h3 className="font-semibold text-lg">
                                            {car.name}
                                        </h3>
                                        <div>
                                            <span className="text-2xl font-bold">{car.price}</span>
                                            <span className="text-sm text-black/50 font-semibold">/day</span>
                                        </div>
                                        <div className="px-2 py-3 flex justify-around bg-black/5 rounded-md my-3">
                                            <div className="flex flex-col items-center">
                                                <PiEngineThin size={20} />
                                                {car.engine}
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <MdPeopleOutline size={20} />
                                                <span>{car.passengers} Person</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <LuFuel size={20} />
                                                <span>
                                                    {car.power}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="w-full rounded-full py-1 mt-5 border-2 border-black font-semibold group-hover:bg-black group-hover:text-white duration-300">
                                            Rent Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="flex justify-center">
                    <button className="rounded-full py-1 px-10 mt-5 border-2 border-black font-semibold hover:bg-black hover:text-white duration-300">
                        See More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RentCar