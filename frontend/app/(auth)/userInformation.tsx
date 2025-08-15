import ReusableButton from "@/components/ui/button";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import ReusableInput from "@/components/ui/input";
import { router } from "expo-router";
import { Text, View } from "react-native";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";

export default function RegisterProcessScreen() {
    return(
        <View className="flex-1">

            <GradientBackground 
                style={{ width:"100%", height:"28%"}}
            />

            <AuthFormBackground>

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Quick Profile Setup</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Enter your personal details</Text>
                </View>

                <View className="gap-6 mb-2">
                    <View className="flex-row gap-2">

                       <View className="flex-1">
                            <ReusableInput 
                                placeholder="First Name"
                            />
                       </View>

                        <View className="flex-1">
                            <ReusableInput 
                                placeholder="Last Name"
                            />
                       </View>
                    </View>

                    <ReusableInput 
                        placeholder="Date of Birth"                    
                    />

                    <ReusableInput 
                        placeholder="Nationality"
                    />

                    <ReusableInput 
                        placeholder="Street Address"
                    />

                    <View className="flex-row gap-2">

                       <View className="flex-1">
                            <ReusableInput 
                                placeholder="Province"
                            />
                       </View>

                        <View className="flex-1">
                            <ReusableInput 
                                placeholder="City/Municipality"
                            />
                       </View>
                    </View>

                    <View className="flex-row gap-2">

                       <View className="flex-[0.7]">
                            <ReusableInput 
                                placeholder="Barangay"
                            />
                       </View>

                        <View className="flex-[0.3]">
                            <ReusableInput 
                                placeholder="Zip Code"
                            />
                       </View>
                    </View>

                    <ReusableButton 
                        title="Continue"
                        onPress={() => router.push("/(tabs)/dashboard")}
                    />

                </View>

            </AuthFormBackground>

        </View>
    );
}