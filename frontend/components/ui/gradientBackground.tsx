import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

interface GradientBackgroundProps{
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function GradientBackground({style, children} : GradientBackgroundProps) {
    return(
        <LinearGradient
            colors={['#2563EB', '#4B35E6']}
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 1  }}
            style={style}
            className="flex justify-center items-center gap-6"
        >
            {children}
        </LinearGradient>
    );
}