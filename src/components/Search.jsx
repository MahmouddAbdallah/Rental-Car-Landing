import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";

const Search = () => {
    return (
        <div className="bg-tranWhite shadow-lg rounded-xl py-8 px-10">
            <form className="flex flex-col lg:flex-row items-end gap-5">
                <label className="space-y-2 w-full">
                    <span>Pick-up Location</span>
                    <div className="relative flex items-center">
                        <div className="absolute ml-1">
                            <IoLocationOutline size={25} />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-8 border py-2 rounded-md"
                            placeholder="Search a location."
                        />
                    </div>
                </label>
                <label className="space-y-2 w-full">
                    <span>Estimate Time</span>
                    <div className="relative flex items-center">
                        <div className="absolute ml-2">
                            <FaRegClock size={20} />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-8 border py-2 rounded-md"
                            placeholder="Estimate Time"
                        />
                    </div>
                </label>
                <label className="space-y-2 w-full">
                    <span>Pick-up Location</span>
                    <div className="relative flex items-center">
                        <div className="absolute ml-1">
                            <IoLocationOutline size={25} />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-8 border py-2 rounded-md"
                            placeholder="Search a location."
                        />
                    </div>
                </label>
                <label className="space-y-2 w-full">
                    <span>Pricing</span>
                    <div className="relative flex items-center">
                        <div className="absolute ml-1">
                            <MdOutlineAttachMoney size={25} />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-8 border py-2 rounded-md"
                            placeholder="0,00"
                        />
                    </div>
                </label>
                <button className="py-2 h-fit px-5 rounded-full bg-black text-white font-semibold text-nowrap">
                    Find a Vehicle
                </button>
            </form>
        </div>
    )
}

export default Search