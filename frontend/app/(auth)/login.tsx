import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LoginScreen() {
    return (
        <View>
            <Text>Login Screen</Text>
            <Link href="/(auth)/register" asChild>
                <Text>Go to Register</Text>
            </Link>
        </View>
    );
}