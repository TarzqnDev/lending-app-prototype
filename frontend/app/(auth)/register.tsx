import { Link } from "expo-router";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthButton from "@/components/ui/authbutton";

import GoogleSymbol from "@/assets/images/GoogleLogo.svg";
import FacebookSymbol from "@/assets/images/FacebookLogo.svg";
import FormDivider from "@/components/ui/divider";
import ReusableButton from "@/components/ui/button";

export default function RegisterScreen() {
    return (
        <View className="flex-1">

            <LinearGradient
                className="w-full h-[28%] flex justify-center items-center"
                colors={['#2563EB', '#3B35E6']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            >

            </LinearGradient>

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

                <ReusableButton title="Email Address" />
                
                <Text className="text-xl font-robotoRegular text-neutral self-center absolute bottom-16">Already have an account? {''}
                    <Link href="/(auth)/login" asChild>
                        <Text>Sign in</Text>
                    </Link>
                </Text>

            </View>

            
        </View>
    );
}