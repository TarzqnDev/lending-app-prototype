import ReusableButton from "@/components/ui/button";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import { useRouter } from "expo-router";

import { Alert, Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";
import axios from "axios";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EmailVerificationScreen() {
    const router = useRouter();
    const [email, setEmail]= useState('');
    const [code, setCode] = useState('');

    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        (async () => {
            const storedEmail = await AsyncStorage.getItem('pendingEmail');
            if (!storedEmail) {
                Alert.alert('Error', 'No email found, Please register again');
                router.push('/(auth)/register');
            } else {
                setEmail(storedEmail);
            }
        })();
    }, [router]);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (cooldown > 0) {
            timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
        }

        return () => clearInterval(timer);
    }, [cooldown]);

    const handleEmailVerification = async () => {

        if (!email) {
            Alert.alert('Error', 'No email found. Please register again');
            return;
        }

        if (code.length !== 6) {
            Alert.alert('Invalid Code', 'Please enter 6-digits code');
            return;
        }

        try {
            console.log("Sending to backend:", { email, code });

            const res = await axios.post('http://192.168.0.23:5000/api/auth/emailVerification', {
                email, code
            });

            Alert.alert('Success', res.data.message);
            
            await AsyncStorage.removeItem('pendingEmail');
            await AsyncStorage.setItem('isVerified', 'true');
            router.push('/(auth)/basicProfileSetup');

        } catch (error) {
            const err = error as any;
            console.error(err.response?.data || err.message);
            Alert.alert('Error', err.response?.data?.message || 'Verification Failed');
        }
    };

    const handleCodeResend = async () => {
        if (!email) {
            Alert.alert('Error', 'No email found, please register again');
            return;
        }

        try {
            const res = await axios.post('http://192.168.0.23:5000/api/auth/emailResendCode', {
                email
            });

            Alert.alert('Success', res.data.message);
            setCooldown(180);
        } catch (error) {
            const err = error as any;
            console.error(err.response?.data || err.message);
            Alert.alert('Error', err.response?.data?.message || 'Failed to resend code');
        }
    }

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

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
                        onTextChange={(val: string) => setCode(val)}
                    />

                </View>

                <ReusableButton 
                    title="Verify Email"
                    onPress={handleEmailVerification}
                />

                <View className="mt-6 gap-6 items-center">
                    <Text className="font-robotoRegular text-lg color-neutral">Didn&apos;t receive the code?</Text>

                    { cooldown > 0 ? (
                        <Text className="font-poppinsMedium text-lg color-neutral">Resend Available: <Text className="font-robotoRegular text-lg color-neutral opacity-60">({formatTime(cooldown)})</Text></Text>
                    ) : (
                        <Text className="font-poppinsMedium text-lg color-neutral" onPress={handleCodeResend}>Resend Code</Text>
                    )}
                    
                </View>
                
            </AuthFormBackground>
            
        </View>
    );
}
