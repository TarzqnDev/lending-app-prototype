import ReusableButton from "@/components/ui/button";
import { router } from "expo-router";
import { View } from "react-native";

export default function DashboardScreen() {
    return(
        <View className="flex-1 justify-center px-8">

            <ReusableButton 
                    title="Go back"
                    onPress={() => router.push("/(auth)/register")}
                />

        </View>
    );
}