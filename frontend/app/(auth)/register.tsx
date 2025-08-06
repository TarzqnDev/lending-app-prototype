import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
    return (
        <View>

            <View>
                <Text>Register Screen</Text>
            </View>

            <View>
                <Text>Email Address</Text>
                <TextInput placeholder="Email" />

                <Text>Password</Text>
                <TextInput placeholder="Password" secureTextEntry/>

                <Button title="Register" onPress={() => {}}/>               
            </View>

            <View>
                <Link href="/(auth)/login" asChild>
                    <Text>Go to Login</Text>
                </Link>
            </View>
            
        </View>
    );
}