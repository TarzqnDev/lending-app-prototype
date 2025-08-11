import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ReusableButton from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function WelcomeScreen() {

    const slides = [
        {
            header: "Protected by Escrow",
            subHeader: "Your money stays safe until both you and the other person agree the deal is done.",
            colors: ['#2563EB', '#3B35E6', '#1E293B'],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            iconName: "shield-outline"
        }, 
        {
            header: "Grow Your Funds",
            subHeader: "Lend your money with confidence and watch it grow over time.",
            colors: ['#2563EB', '#22B07D', '#26C1A2'],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            iconName: "stats-chart-outline"
        },
        {
            header: "Borrow with Ease",
            subHeader: "Get the money you need quickly with simple and clear terms.",
            colors: ['#2563EB', '#59C2C3', '#7C5DF5'],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            iconName: "wallet-outline"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            router.push('/(auth)/register');
        }
    };

    return(
        <View className="flex-1">
            
            <LinearGradient
                className="w-full h-4/5 flex justify-center items-center gap-8"
                colors={slides[currentIndex].colors as [string, string]}
                start={slides[currentIndex].start}        
                end={slides[currentIndex].end} 
            >
                <View className="bg-accent/20 p-6 rounded-full">
                    <Ionicons name={slides[currentIndex].iconName as any} size={50} color="#FFFFFF" />
                </View>

                <Text className="text-4xl text-white font-poppinsBold">{slides[currentIndex].header}</Text>
                <Text className="text-2xl text-accent font-robotoLight text-center w-4/6">{slides[currentIndex].subHeader}</Text>

                <View className="flex-row gap-2">
                    {slides.map((_, index) => (
                        <View key={index}> 
                            {index === currentIndex ? (
                                <View className="w-12 p-1 bg-white rounded-full"/> 
                                    ) : (
                                <View className="w-1 p-1 bg-gray-300 rounded-full"/>
                                )}
                        </View>
                    ))}
                </View>

            </LinearGradient>
            
            <View className="w-full h-1/5 flex items-center pt-8 px-8 gap-8">

                <ReusableButton 
                    title="Continue"
                    onPress={nextSlide}
                    icon={<Ionicons name="arrow-forward" size={20} color="#DBDBDB"/>}
                />

                <Link href="/(auth)/register" asChild>
                    <Text className="text-xl font-robotoRegular text-neutral opacity-60">Skip Introduction</Text>
                </Link>

            </View>

        </View>
    );
}