import ReusableButton from "@/components/ui/button";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import { router } from "expo-router";

import { Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";

export default function EmailVerificationScreen() {
    return(
        <View className="flex-1">

            <GradientBackground 
                style={{ width: "100%", height:"28%"}}
            />

            <AuthFormBackground>
                
                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Verify Your Email</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Enter the 6-digit code sent to your email</Text>
                </View>

                <View className="gap-2 mb-6">
                    <Text className="font-poppinsMedium text-lg color-neutral">Verification Code</Text>

                    <OtpInput 
                        numberOfDigits={6}
                        autoFocus={true}
                        focusColor="#2563EB"
                    />

                </View>

                <ReusableButton 
                    title="Verify Email"
                    onPress={() => router.push("/(auth)/userInformation")}
                />

                <View className="mt-6 gap-6 items-center">
                    <Text className="font-robotoRegular text-lg color-neutral">Didn&apos;t receive the code?</Text>
                    <Text className="font-poppinsMedium text-lg color-neutral">Resend Code</Text>
                </View>
                
            </AuthFormBackground>
            
        </View>
    );
}