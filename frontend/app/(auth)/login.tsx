import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    return (
        <View>

            <View>
                <Text>Login Screen</Text>
            </View>

            <View>
                <Text>Email Address</Text>
                <TextInput placeholder="Email"/>

                <Text>Password</Text>
                <TextInput placeholder="Password" secureTextEntry/>

                <Button title="Login" onPress={() => {}}/>
            </View>

            <View>
                <Link href="/(auth)/register" asChild>
                    <Text>Go to Register</Text>
                </Link>
            </View>
            
        </View>
    );
}