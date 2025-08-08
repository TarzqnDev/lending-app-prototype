import ReusableButton from "@/components/ui/button";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function IntroScreen() {
    return (
        <View className="flex-1">

            <View className="w-full h-3/4 bg-[#1B263B] flex justify-center items-center">
                <Text className="text-4xl text-white font-poppinsBold">
                    Vaulcrow
                </Text>
            </View>

            <View className="w-full h-1/4 flex justify-center items-center px-8 gap-4">

                    <ReusableButton 
                    title="Get Started" 
                    onPress={() => console.log('Pressed')} 
                    icon={<Ionicons name="arrow-forward" size={20} color="#BDBDBD" />}
                    />

                    <Text className="text-xl font-robotoRegular"> Already have an account? {''}
                        <Link href="/(auth)/login" asChild>
                            <Text>Login</Text>
                        </Link>
                    </Text>

            </View>

        </View>
    );
}