import ReusableButton from "@/components/ui/button";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import GradientBackground from "@/components/backgrounds/gradientBackground";

export default function IntroScreen() {
    return (
        <View className="flex-1">

           <GradientBackground
                style={{ width: "100%", height: "80%"}}
           >

                {/* <View className="p-8 bg-accent rounded-full mb-8">
                    <Text>Logo</Text>
                </View> */}

                <Text className="text-5xl text-white font-poppinsBold text-center">
                    LendScape
                </Text>

                <Text className="text-2xl text-accent font-robotoLight text-center w-4/6">
                    Connect lenders and borrowers with built-in escrow protection
                </Text>

           </GradientBackground>
                
            <View className="w-full h-1/5 flex items-center pt-8 px-8 gap-8">

                    <ReusableButton 
                    title="Get Started" 
                    onPress={() => router.push("/(onboarding)/welcome")} 
                    icon={<Ionicons name="arrow-forward" size={20} color="#BDBDBD" />}
                    />

                    <Text className="text-xl font-robotoRegular text-neutral"> Already have an account? {''}
                        <Link href="/(auth)/login" asChild>
                            <Text>Sign in</Text>
                        </Link>
                    </Text>

            </View>

        </View>
    );
}