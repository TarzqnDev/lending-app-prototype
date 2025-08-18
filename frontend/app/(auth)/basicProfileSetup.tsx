import ReusableButton from "@/components/ui/button";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import ReusableInput from "@/components/ui/input";
import { useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";
import Dropdown from "@/components/ui/dropdown";
import { useEffect, useState } from "react";
import MobileNumberInput from "@/components/ui/mobileNumberInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function BasicInformationSetupScreen() {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [nationality, setNationality] = useState('');
    const [country, setCountry] = useState('');
    const [mobile, setMobile] = useState('');

    useEffect(() => {
        (async () => {
            const userId = await AsyncStorage.getItem('userId');
            const isVerified = await AsyncStorage.getItem('isVerified');

            if (!userId) {
                Alert.alert('Error', 'User not found. Please register first.');
                router.push('/(auth)/register');
                return;
            }

            if (isVerified !== 'true') {
                Alert.alert('Access Denied', 'You must verify your email before setting up your profile.');
                router.push('/(auth)/emailVerification');
                return;
            }

        })();
    }, [router]);

    const handleSubmit = async () => {
        if (!firstName || !lastName || !month || !day || !year || !nationality || !country || !mobile) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            const userId = await AsyncStorage.getItem('userId');

            const res = await axios.post('http://192.168.0.23:5000/api/auth/information', {
                userId, firstName, lastName, month, day, year, nationality, country, mobile
            });

            console.log(res.data);
            Alert.alert('Success', 'Successful profile setup');
            router.push('/(tabs)/dashboard');

        } catch (error) {
            const err = error as any;
            console.error(err.response?.data || err.message);
            Alert.alert('Error', err.response?.data?.message || 'Something went wrong');
        }
    }

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
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                       </View>

                        <View className="flex-1">
                            <ReusableInput 
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={setLastName}
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
                                value={day}
                                onChangeText={setDay}
                            />
                       </View>

                        <View className="flex-[0.4]">
                            <ReusableInput 
                                placeholder="Year"
                                value={year}
                                onChangeText={setYear}
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

                    <MobileNumberInput 
                        placeholder="Mobile Number"
                        value={mobile}
                        onChangeText={setMobile}
                    />

                </View>

                 <ReusableButton 
                    title="Submit"
                    onPress={handleSubmit}
                />

            </AuthFormBackground>

        </View>
    );
}
