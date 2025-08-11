import ReusableInput from "@/components/ui/input";
import { Text, View } from "react-native";

export default function EmailRegistrationScreen() {
    return (
        <View className="flex-1">
            
            <View className="w-full h-4/5 rounded-t-[28px] absolute bottom-0 bg-white px-8">

                <View className="items-center py-14">
                    <Text>Email</Text>
                    <Text>Sub Header</Text>
                </View>

                <View className="gap-6 mb-2">
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

            </View>

        </View>
    );
}