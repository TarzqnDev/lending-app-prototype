import { dropdownData } from "@/constants/dropdownData";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface DropdownItem{
    label: string,
    value: string
}

interface DropdownProps{
    type: "month" | "nationality" | "country";
    placeholder?: string;
    value: string;
    onValueChange: (value: string) => void;
}

export default function Dropdown({type, placeholder, value, onValueChange} : DropdownProps) {
    const [open, setOpen] = useState(false);

    const selectedLabel = dropdownData[type].find((item) => item.value === value)?.label || "";

    const handleSelect = (item: DropdownItem) => {
        onValueChange(item.value);
        setOpen(false);
    }

    return(
        <View className="w-full relative">

            <Pressable
                className="flex-row justify-between items-center border border-gray-300 rounded-lg pl-4 pr-2 py-4"
                onPress={() => setOpen(!open)}
            >

                <Text className={`text-xl font-robotoRegular ${selectedLabel ? "text-neutral" : "text-neutral opacity-65"}`}>
                {selectedLabel || placeholder}
                </Text>

                <Ionicons name={open ? "chevron-up" : "chevron-down"} size={20} color="#0F172A"/>

            </Pressable>

            {open && (
                <View className="w-full absolute top-16 left-0 right-0 bg-white rounded-lg border border-gray-200 max-h-[9.6rem] z-50"> 
                    <FlatList 
                        data={dropdownData[type]}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                            <Pressable
                                className="pl-4 py-3 border-t border-gray-50"
                                onPress={() => handleSelect(item)}
                            >
                                <Text className="text-lg">{item.label}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            )}

        </View>
        
        
    );
}