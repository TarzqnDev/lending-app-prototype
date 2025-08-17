import ReusableButton from "@/components/ui/button";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import ReusableInput from "@/components/ui/input";
import { router } from "expo-router";
import { Text, View } from "react-native";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";
import Dropdown from "@/components/ui/dropdown";
import { useState } from "react";

export default function BasicInformationSetupScreen() {
    const [month, setMonth] = useState('');
    const [nationality, setNationality] = useState('');
    const [country, setCountry] = useState('');

    return(
        <View className="flex-1">

            <GradientBackground 
                style={{ width:"100%", height:"28%"}}
            />

            <AuthFormBackground>

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Basic Information</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Enter your personal details</Text>
                </View>

                <View className="gap-6 mb-8">
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

                    <View className="flex-row gap-2">

                       <View className="flex-[0.4]">
                            <Dropdown 
                                type="month"
                                placeholder="Month"
                                value={month}
                                onValueChange={setMonth}
                            />
                       </View>

                        <View className="flex-[0.2]">
                            <ReusableInput 
                                placeholder="Day"
                            />
                       </View>

                        <View className="flex-[0.4]">
                            <ReusableInput 
                                placeholder="Year"
                            />
                       </View>
                    </View>

                    <Dropdown 
                        type="nationality"
                        placeholder="Nationality"
                        value={nationality}
                        onValueChange={setNationality}
                    />

                    <Dropdown
                        type="country"
                        placeholder="Country of Residence"
                        value={country}
                        onValueChange={setCountry}
                    />

                    <ReusableInput 
                        placeholder="Mobile Number"
                    />

                    {/* <ReusableInput 
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
                    </View> */}

                </View>

                 <ReusableButton 
                    title="Continue"
                    onPress={() => router.push("/(tabs)/dashboard")}
                />

            </AuthFormBackground>

        </View>
    );
}