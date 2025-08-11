import { Text, View } from "react-native";

interface FormDividerProps {
    text: string;
    className?: string;
    lineClassName?: string;
    textClassName?: string;
}

const FormDivider = ({ text, className = '', lineClassName = '', textClassName = '' } : FormDividerProps) => {
    return(
        <View className={`flex-row items-center w-full ${className}`}>

            <View className={`flex-1 h-[1px] bg-gray-200 ${lineClassName}`} />

                <Text className={`font-robotoLight text-lg text-neutral px-4 bg-white ${textClassName}`}>{text}</Text>

            <View className={`flex-1 h-[1px] bg-gray-200 ${lineClassName}`} />

        </View>
    );
};

export default FormDivider;