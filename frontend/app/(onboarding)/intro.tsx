import ReusableButton from "@/components/ui/button";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

export default function IntroScreen() {
    return (
        <View className="flex-1">

            <LinearGradient 
                className="w-full h-4/5 flex justify-center items-center"
                colors={['#2563EB', '#3B35E6']}
                start={{ x: 0.5, y: 0 }}        
                end={{ x: 0.5, y: 1 }} 
                >

                {/* <View className="p-8 bg-accent rounded-full mb-8">
                    <Text>Logo</Text>
                </View> */}

                <Text className="text-5xl text-white font-poppinsBold mb-8">
                    LendScape
                </Text>

                <Text className="text-2xl text-accent font-robotoLight text-center w-4/6">
                    Connect lenders and borrowers with built-in escrow protection
                </Text>
                
            </LinearGradient>

            <View className="w-full h-1/5 flex items-center pt-8 px-8 gap-8">

                    <ReusableButton 
                    title="Get Started" 
                    onPress={() => console.log('Pressed')} 
                    icon={<Ionicons name="arrow-forward" size={20} color="#BDBDBD" />}
                    />

                    <Text className="text-xl font-robotoRegular text-neutral"> Already have an account? {''}
                        <Link href="/(auth)/login" asChild>
                            <Text>Sign in</Text>
                        </Link>
                    </Text>

            </View>

        </View>
    );
}