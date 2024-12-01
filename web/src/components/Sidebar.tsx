import { BsFillBagHeartFill } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { LuInbox, LuBoomBox } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar: React.FC = () => {
    const iconSize = 24;

    const menuItems = [
        {
            icon: <LuInbox size={iconSize} />,
        },
        {
            icon: <LuBoomBox size={iconSize} />,
        },
        {
            icon: <LiaUserFriendsSolid size={iconSize} />,
        },
    ];

    const menuItems2 = [
        {
            icon: <FaRegBell size={iconSize} />,
        },
        {
            icon: <IoSettingsOutline size={iconSize} />,
        },
    ];

    return (
        <div className="h-full py-4 px-2 bg-white rounded-full shadow-lg flex flex-col items-center justify-between">
            <div className="flex flex-col space-y-6 items-center">
                <div className="bg-gradient-to-b from-brand-secondary to-brand-primary p-2 rounded-full cursor-pointer">
                    <BsFillBagHeartFill
                        size={iconSize}
                        className="text-white"
                    />
                </div>
                <div
                    className="
                        hover:bg-gray-100
                        p-2
                        rounded-full
                        cursor-pointer
                        text-brand-primary
                        transition-colors
                        duration-300
                        ease-in-out
                    "
                >
                    <HiSquares2X2 size={iconSize} />
                </div>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="
                            hover:bg-gray-100
                            p-2
                            rounded-full
                            cursor-pointer
                            text-gray-500
                            hover:text-brand-primary
                            transition-colors
                            duration-300
                            ease-in-out
                        "
                    >
                        {item.icon}
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-6 items-center">
                {menuItems2.map((item, index) => (
                    <div
                        key={index}
                        className="
                            hover:bg-gray-100
                            p-2 rounded-full
                            cursor-pointer
                            text-gray-500
                            hover:text-brand-primary
                            transition-colors
                            duration-300
                            ease-in-out
                            "
                        >
                        {item.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
