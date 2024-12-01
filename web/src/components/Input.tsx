import { Input as ShadInput } from "@/components/ui/input";
import { IconType } from 'react-icons';

interface InputProps {
    LeftAdornment?: IconType;
    RightAdornment?: IconType;
}

const Input: React.FC<InputProps> = ({ LeftAdornment, RightAdornment }) => {
    return (
        <div className="relative">
            {LeftAdornment && (
                <LeftAdornment
                    className="absolute left-2 top-1/2 -translate-y-1/2"
                />
            )}
            <ShadInput
                className="bg-white rounded-full"
            />
            {RightAdornment && (
                <RightAdornment
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                />
            )}
        </div>
    );
}

export default Input;
