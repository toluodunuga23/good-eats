import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Checkbox } from 'expo-checkbox';
export default function Grocery() {
    const [isChecked, setIsChecked] = useState(false);
    const [groceries, setGroceries] = useState([
        {
            name: "Apple",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            name: "Banana",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
    ])

  return (
    <SafeAreaView className="flex-1 w-full" style={{ backgroundColor: "#FFF8F6" }}>
        <SafeAreaView className="w-full">
            <Text className="text-xl font-bold text-gray-900 px-4 mt-10">Grocery List</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 14, marginTop: 10 , width: "100%" }}
            >
                <View className="flex-col justify-between items-center gap-4 p-4 w-full">
                {groceries.map((grocery) => (
                    <View key={grocery.name} className="flex-row justify-between items-center bg-white rounded-lg p-4 gap-4 w-full">
                         <Text>{grocery.name}</Text>
                        <Checkbox
                        value={grocery.isChecked}
                        onValueChange={() => {grocery.isChecked = !grocery.isChecked}}
                        color={grocery.isChecked ? "#E95322" : "#000000"}
                        />
                       
                    </View>
                ))}
                </View>
            </ScrollView>

        </SafeAreaView>
    </SafeAreaView>
  )
}