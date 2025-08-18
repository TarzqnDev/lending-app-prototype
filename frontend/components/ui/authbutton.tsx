import { Pressable, Text } from "react-native";
import { SvgProps } from "react-native-svg";

interface AuthButtonProps {
    title: string;
    Icon: React.FC<SvgProps>;
    className?: string;
    textClassName?: string;
}

const AuthButton = ({ title, Icon, className = '', textClassName = ''} : AuthButtonProps) => {
    return (

        <Pressable 
            className={`w-full flex-row justify-center items-center py-4 rounded-lg border border-gray-300 gap-3 ${className}`}
        >
            <Icon width={20} height={20} />
            <Text className={`text-neutral text-xl font-poppinsMedium ${textClassName}`}>{title}</Text>
        </Pressable>

    );
};

export default AuthButton;
