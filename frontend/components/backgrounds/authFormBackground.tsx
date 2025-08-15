import { ReactNode } from "react";
import { View } from "react-native";

interface AuthFormBackgroundProps{
    children?: ReactNode;
}

export default function AuthFormBackground({ children } : AuthFormBackgroundProps) {
    return(
    <View className="w-full h-[80%] rounded-t-[28px] absolute bottom-0 bg-white px-8">
        {children}
        {/* <View className="w-[90%] h-[82%] absolute bottom-0 bg-accent/20 rounded-t-[34px] self-center"></View> */}
    </View>  
    );
}