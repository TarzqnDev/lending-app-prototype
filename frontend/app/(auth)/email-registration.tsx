import ReusableButton from "@/components/ui/button";
import ReusableInput from "@/components/ui/input";
import { Link, router } from "expo-router";
import { Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import GradientBackground from "@/components/ui/gradientBackground";

export default function EmailRegistrationScreen() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View className="flex-1">

            <GradientBackground 
                style={{ width: "100%", height: "28%"}}
            />
            
            <View className="w-full h-4/5 rounded-t-[28px] absolute bottom-0 bg-white px-8">

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Create Your Account</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Enter your details to get started</Text>
                </View>

                <View className="gap-6 mb-4">
                    <ReusableInput 
                        placeholder="Email Address"
                        keyboardType="email-address"
                    />
                    
                    <ReusableInput 
                        placeholder="Password"
                        isPassword
                    />

                    <ReusableInput 
                        placeholder="Confirm Password"
                        isPassword
                    />
                </View>

                <View className="gap-6">
                <View className="flex-row items-center gap-3">
                    <Checkbox 
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? "#2563EB" : undefined}
                        style={{ width: 20, height: 20, borderColor: "#D1D5DB", borderWidth: 1 }}
                    />
                    <Text className="font-poppinsMedium text-base text-neutral">I agree to <Text className="color-primary">Terms and Condition</Text> & <Text className="color-primary">Privacy Policy</Text></Text>
                </View>

                <ReusableButton 
                    title="Continue"
                    onPress={() => router.push('/(auth)/email-verification')}
                />

                </View>

                 <Text className="text-xl font-robotoRegular text-neutral self-center absolute bottom-16">Already have an account? {''}
                    <Link href="/(auth)/login" asChild>
                        <Text>Sign in</Text>
                    </Link>
                </Text>

            </View>

        </View>
    );
}