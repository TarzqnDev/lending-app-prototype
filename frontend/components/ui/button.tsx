    import { Pressable, PressableProps, Text } from "react-native";

    interface ReusableButtonProps extends PressableProps {
        title: string;
        className?: string;
        textClassName?: string;
        icon?: React.ReactNode;
    }

    const ReusableButton = ({ title, icon, className = '', textClassName ='', ...props }: ReusableButtonProps) => {
        return (
            <Pressable className={`w-full bg-neutral flex-row justify-center items-center p-4 rounded-lg ${className}`} {...props}>
                <Text className={`text-white text-xl font-poppinsMedium ${textClassName}`}>
                    {title}    
                </Text>

                {icon && (
                    <Text className="ml-6">{icon}</Text>
                )}

            </Pressable>
        );
    };

    export default ReusableButton;