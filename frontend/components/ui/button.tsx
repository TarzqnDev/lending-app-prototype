    import { Pressable, PressableProps, Text, View } from "react-native";

    interface ReusableButtonProps extends PressableProps {
        title: string;
        className?: string;
        textClassName?: string;
        icon?: React.ReactNode;
        iconPosition?: "left" | "right";
    }

    const ReusableButton = ({ title, icon, className = '', textClassName ='', iconPosition = "right", ...props }: ReusableButtonProps) => {
        return (
            <Pressable className={`w-full bg-neutral flex-row justify-center items-center p-4 rounded-lg ${className}`} {...props}>

                { icon && iconPosition === "left" && (
                    <View className="mr-3">{icon}</View>
                )}       

                <Text className={`text-white text-xl font-poppinsMedium ${textClassName}`}>
                    {title}    
                </Text>

                {icon && iconPosition === "right" && (
                    <Text className="ml-6">{icon}</Text>
                )}

            </Pressable>
        );
    };

    export default ReusableButton;