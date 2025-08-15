import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TextInputProps, Pressable, View } from "react-native";

interface ReusableInputProps extends TextInputProps {
    inputClassName?: string;
    isPassword?: boolean;
}

const ReusableInput = ({ inputClassName = '', isPassword = false, ...props }: ReusableInputProps ) => {

    const [showPassword, setShowPassword] = useState(false);
    const hidePassword = isPassword && !showPassword;

    return (
        <View className="w-full flex-row items-center border border-gray-300 rounded-lg px-3 py-1">
            <TextInput className={`flex-1 text-neutral text-xl font-robotoRegular ${inputClassName}`}  
            secureTextEntry={hidePassword}
            {...props}
            />

            {isPassword && (
                <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                >
                    <Ionicons 
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color="#E0E0E0"
                    />
                </Pressable>
            )}
        </View>
    );
};

export default ReusableInput;