import AuthButton from "@/components/ui/authbutton";
import ReusableButton from "@/components/ui/button";
import FormDivider from "@/components/ui/divider";
import ReusableInput from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, View } from "react-native";

import GoogleSymbol from "@/assets/images/GoogleLogo.svg";
import FacebookSymbol from "@/assets/images/FacebookLogo.svg";

export default function LoginScreen() {
    return (
        <View className="flex-1">

            <LinearGradient
                className="w-full h-[28%] flex justify-center items-center"
                colors={['#2563EB', '#4B35E6']}
                start={{ x: 0, y: 0 }}        
                end={{ x: 1, y: 1 }} 
            >
                

            </LinearGradient>

            <View className="w-full h-4/5 rounded-t-[28px] absolute bottom-0 bg-white px-8">

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Welcome Back</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Sign in to your account</Text>
                </View>

                <View className="gap-6 mb-2">
                    <ReusableInput
                        placeholder="Email Address"
                        keyboardType="email-address"
                    />

                    <ReusableInput 
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>

                <View className="gap-6">
                    <Link href="/intro" asChild>
                        <Text className="font-poppinsMedium text-lg text-neutral self-end">Forgot password?</Text>
                    </Link>

                    <ReusableButton 
                        title="Sign in"
                        onPress={() => console.log('Pressed')} 
                    />
                </View>

                <View className="py-8">
                    <FormDivider text="Or sign in with" />
                </View>

                <View className="flex-row gap-2">

                    <View className="flex-1">
                        <AuthButton Icon={GoogleSymbol} title="Google" />
                    </View>

                    <View className="flex-1">
                        <AuthButton Icon={FacebookSymbol} title="Facebook" />
                    </View>

                </View>

                <Text className="text-xl font-robotoRegular text-neutral self-center absolute bottom-16">Don&apos;t have an account? {''}
                    <Link href="/(auth)/register" asChild>
                        <Text>Sign up</Text>
                    </Link>
                </Text>

                

            </View>
            
        </View>
    );
}