import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native';
import grocery from "../../assets/images/shopping-bag.png";
import { ImageSourcePropType } from 'react-native';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MenuOption } from '../../components/MenuOption';
import { DropdownMenu } from '../../components/DropdownMenu';


export default function Grocery() {
    const [groceries, setGroceries] = useState([
        {
            id: "1",
            name: "Apple",
            category: "Fruits",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "2",
            name: "Banana",
            category: "Fruits",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "3",
            name: "Orange",
            category: "Fruits",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "4",
            name: "Water",
            category: "Drinks",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "5",
            name: "Milk",
            category: "Dairy",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "6",
            name: "Bread",
            category: "Bakery",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",

        },
        {
            id: "7",
            name: "Frozen Pizza",
            category: "Frozen Meals",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "8",
            name: "Lettuce",
            category: "Vegetables",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        },
        {
            id: "9",
            name: "Steak",
            category: "Meat",
            isChecked: false,
            quantity: 1,
            price: 1.99,
            image: "https://images.pexels.com/photos/17952746/pexels-photo-17952746.jpeg",
        }
    ]);

    const [visible, setVisible] = useState(false);
    const groceryCategories = ["Fruits", "Vegetables", "Meat", "Dairy", "Bakery", "Frozen Meals"];

    const handleCheckboxChange = (id: string) => {
        setGroceries((prev) =>
            prev.map((grocery) =>
                grocery.id === id ? { ...grocery, isChecked: !grocery.isChecked } : grocery
            )
        );
    };

    return (
        <SafeAreaView className="flex-1 w-full" style={{ backgroundColor: "#FFF8F6" }}>
            <Pressable onPress={() => setVisible(false)}>
                <View className="flex flex-row items-center justify-between ml-4 mr-7">
                    <View className="flex flex-row  items-center ">
                        <Image source={grocery as ImageSourcePropType} style={{ height: 40, width: 40 }} />
                        <Text className="text-xl font-bold text-gray-900 px-4 ">My Grocery List</Text>
                    </View>
                    <View>
                        <DropdownMenu
                            visible={visible}
                            handleOpen={() => setVisible(true)}
                            handleClose={() => setVisible(false)}

                            trigger={
                                <View>
                                    <Ionicons name="ellipsis-vertical" size={25} color="orange" />
                                </View>
                            }
                        >
                            <View className='flex flex-col gap-4'>
                                <MenuOption onSelect={() => {

                                    setVisible(false);
                                }}>
                                    <Text>Add Grocery</Text>
                                </MenuOption>
                                <MenuOption onSelect={() => {

                                    setVisible(false);
                                }}>
                                    <Text>Remove Grocery</Text>
                                </MenuOption>
                            </View>
                        </DropdownMenu>
                    </View>
                </View>
            </Pressable>




            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 14, marginTop: 10 }}
            >
                <View className="flex-col gap-8 p-4 w-full">
                    {groceryCategories.map((category) => (
                        <View key={category}>
                            <Text className="text-md font-bold text-gray-900  mt-10">{category}</Text>
                            <View className='mt-6 gap-7'>
                            {groceries.filter((item) => item.category === category).map((grocery) => (
                                <TouchableOpacity
                                    key={grocery.id}
                                    onPress={() => handleCheckboxChange(grocery.id)}
                                    className="flex-row justify-between items-center bg-white rounded-lg p-4"
                                >
                                    <Text className="text-base text-gray-800">{grocery.name}</Text>
                                    <Checkbox
                                        value={grocery.isChecked}
                                        onValueChange={() => handleCheckboxChange(grocery.id)}
                                        color={grocery.isChecked ? "#E95322" : undefined}
                                    />
                                </TouchableOpacity>
                            ))}
                            </View>
                        </View>


                    ))}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    triggerStyle: {
        height: 40,
        backgroundColor: "#E95322",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    triggerText: {
        fontSize: 16,
    }
});
