import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import AuthButton from "@/components/ui/authbutton";

import GoogleSymbol from "@/assets/images/GoogleLogo.svg";
import FacebookSymbol from "@/assets/images/FacebookLogo.svg";
import FormDivider from "@/components/ui/divider";
import ReusableButton from "@/components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import GradientBackground from "@/components/ui/gradientBackground";

export default function RegisterScreen() {
    return (
        <View className="flex-1">

            <GradientBackground 
                style={{ width: "100%", height: "28%"}}
            />

            <View className="w-full h-4/5 rounded-t-[28px] absolute bottom-0 bg-white px-8">

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Get Started</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Select a sign up option</Text>
                </View>

                <View className="gap-6">

                    <AuthButton Icon={GoogleSymbol} title="Continue with Google"/>
                    <AuthButton Icon={FacebookSymbol} title="Continue with Facebook"/>

                </View>

                <View className="py-8">
                    <FormDivider text="Or sign up with"/>
                </View>

                <ReusableButton 
                    title="Email Address" 
                    iconPosition="left"  
                    onPress={() => router.push('/(auth)/email-registration')}
                    icon={<Ionicons name="mail" size={20} color="#FFFFFF" />}    
                />
                
                <Text className="text-xl font-robotoRegular text-neutral self-center absolute bottom-16">Already have an account? {''}
                    <Link href="/(auth)/login" asChild>
                        <Text>Sign in</Text>
                    </Link>
                </Text>

            </View>

            
        </View>
    );
}