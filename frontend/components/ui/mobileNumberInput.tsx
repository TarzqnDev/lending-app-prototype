import { Image, Text, TextInput, View } from "react-native";

interface MobileNumberInputProps{
    value: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
}

export default function MobileNumberInput({value, placeholder, onChangeText} : MobileNumberInputProps){
    return(
        <View className="flex-row w-full h-[53px] border border-gray-300 rounded-lg overflow-hidden">

            <View className="flex-row items-center bg-gray-100 px-3 gap-2">
                <Image 
                    source={require("../../assets/images/flags/Philippines.png")}
                    style={{ width: 25, height: 20}}
                />
                <Text className="text-neutral font-robotoMedium text-xl">+63</Text>
            </View>

            <TextInput 
                className="flex-1 px-3 text-xl font-robotoRegular text-neutral"
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType="phone-pad"
                maxLength={10}
            />

        </View>  
    );
}