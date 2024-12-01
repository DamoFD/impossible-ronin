import Input from "./Input";
import { IoSearch } from "react-icons/io5";
import { FaMicrophoneAlt, FaCalendarDay } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoMdCloudUpload } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-between h-14 px-6 w-full">
            <Input
                LeftAdornment={IoSearch}
                RightAdornment={FaMicrophoneAlt}
                placeholder="Search..."
            />
            <div className="flex items-center space-x-4">
                <Button
                    className="text-brand-primary bg-brand-primary bg-opacity-20 rounded-full"
                >
                    <FaCalendarDay />
                </Button>
                <Button className="text-white bg-black rounded-full flex items-center">
                    <p>Export</p>
                    <IoMdCloudUpload />
                </Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-brand-primary text-white font-bold">CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
}

export default Header;
