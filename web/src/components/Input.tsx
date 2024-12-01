import { Input as ShadInput } from "@/components/ui/input";
import { IconType } from 'react-icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    LeftAdornment?: IconType;
    RightAdornment?: IconType;
}

const Input: React.FC<InputProps> = ({ LeftAdornment, RightAdornment, ...props }) => {
    return (
        <div className="relative">
            {LeftAdornment && (
                <LeftAdornment
                    className="absolute text-gray-800 left-3 top-1/2 -translate-y-1/2"
                />
            )}
            <ShadInput
                className="bg-white rounded-full px-8 text-gray-800 w-72 placeholder:text-gray-800"
                {...props}
            />
            {RightAdornment && (
                <RightAdornment
                    className="absolute text-brand-primary right-3 top-1/2 -translate-y-1/2"
                />
            )}
        </div>
    );
}

export default Input;
