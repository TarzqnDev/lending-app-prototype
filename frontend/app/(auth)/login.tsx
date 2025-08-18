import AuthButton from "@/components/ui/authButton";
import ReusableButton from "@/components/ui/button";
import FormDivider from "@/components/ui/divider";
import ReusableInput from "@/components/ui/input";
import { Link, useRouter } from "expo-router";
import { Alert, Text, View } from "react-native";

import GoogleSymbol from "@/assets/images/GoogleLogo.svg";
import FacebookSymbol from "@/assets/images/FacebookLogo.svg";
import GradientBackground from "@/components/backgrounds/gradientBackground";
import AuthFormBackground from "@/components/backgrounds/authFormBackground";
import axios from "axios";
import { useState } from "react";


export default function LoginScreen() {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      try {
         const res = await axios.post('http://192.168.0.23:5000/api/auth/login', {
            email, password
        });

        console.log(res.data);
        Alert.alert('Success', 'Logged in successfully');
        router.push('/(tabs)/dashboard');

      } catch (error) {
        const err = error as any;
        console.error(err.response?.data || err.message);
        Alert.alert('Error', err.response?.data?.message || 'Something went wrong');
      }
    };

    return (
        <View className="flex-1">

            <GradientBackground
                style={{ width: "100%", height: "28%"}}
            />

            <AuthFormBackground>

                <View className="items-center py-14">
                    <Text className="font-poppinsSemiBold text-4xl text-neutral">Welcome Back</Text>
                    <Text className="font-robotoRegular text-2xl text-neutral opacity-70">Sign in to your account</Text>
                </View>

                <View className="gap-6 mb-2">
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
                </View>

                <View className="gap-6">
                    <Link href="/intro" asChild>
                        <Text className="font-poppinsMedium text-lg text-neutral self-end">Forgot password?</Text>
                    </Link>

                    <ReusableButton 
                        title="Sign in"
                        onPress={handleLogin} 
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
                
            </AuthFormBackground>
            
        </View>
    );
}