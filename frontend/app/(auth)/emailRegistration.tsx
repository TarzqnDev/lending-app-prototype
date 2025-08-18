import ReusableButton from "@/components/ui/button";
import ReusableInput from "@/components/ui/input";
import { Link, useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EmailRegistrationScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleRegister = async () => {
        if (!isChecked) {
            Alert.alert('Terms Required', 'You must agree to the terms first.');
            return;
        }

        try{
            const res = await axios.post('http://192.168.0.23:5000/api/auth/register', {
                email, password, confirmPassword
            });

            await AsyncStorage.setItem('pendingEmail', email);
            await AsyncStorage.setItem('userId', res.data.userId);

            console.log(res.data);
            Alert.alert('Success', 'Account created successfully');
            router.push('/(auth)/emailVerification');
        } catch (error) {
            const err = error as any;
            console.error(err.response?.data || err.message);
            Alert.alert('Error', err.response?.data?.message || 'Something went wrong');
        }
    }

    return (
        <View className="flex-1">

            <GradientBackground 
                style={{ width: "100%", height: "28%"}}
            />
            
           <AuthFormBackground>

                <View className="items-center py-14">
                        <Text className="font-poppinsSemiBold text-4xl text-neutral">Create Your Account</Text>
                        <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Enter your details to get started</Text>
                    </View>

                    <View className="gap-6 mb-4">
                        <ReusableInput 
                            placeholder="Email Address"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        
                        <ReusableInput 
                            placeholder="Password"
                            isPassword
                            value={password}
                            onChangeText={setPassword}
                        />

                        <ReusableInput 
                            placeholder="Confirm Password"
                            isPassword
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
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
                            onPress={handleRegister}
                        />

                    </View>

                    <Text className="text-xl font-robotoRegular text-neutral self-center absolute bottom-16">Already have an account? {''}
                        <Link href="/(auth)/login" asChild>
                            <Text>Sign in</Text>
                        </Link>
                    </Text>

                </AuthFormBackground>

        </View>
    );
}