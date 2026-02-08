// Home.js
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ActivityIndicator,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import List from "../../components/List";
import SearchBar from "../../components/SearchBar";


export default function Recipe() {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    // get data from the fake api endpoint
    //   useEffect(() => {
    //     const getData = async () => {
    //       const apiResponse = await fetch(
    //         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    //       );
    //       const data = await apiResponse.json();
    //       setFakeData(data);
    //     };
    //     getData();
    //   }, []);

    const foodTypes = ["Breakfast", "Lunch", "Dinner", "Dessert"];

    return (
        <SafeAreaView className="flex-1 w-full" style={{ backgroundColor: "#FFF8F6" }}>
            <View className="flex flex-row items-start  ml-4 mr-1  w-1/2 mt-10 h-[90px]">
                <Text className="text-2xl  text-gray-900 px-4 ">What do you want to cook today?</Text>
            </View>
            <View className="mb-4">
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />

            {fakeData && searchPhrase && (

                <List
                    searchPhrase={searchPhrase}
                    data={fakeData}
                    setClicked={setClicked}
                />

            )}
            </View>
            <View className="w-full flex flex-row gap-5">
                <ScrollView horizontal>
                    <View className="flex flex-row gap-4 ml-6">
                {foodTypes.map((foodType) => (  
                    <TouchableOpacity key={foodType} className="text-md  text-gray-900 px-4 bg-white rounded-md gap-5 p-2 flex-row items-center justify-center border border-gray-200">
                        <Text className="text-md  text-gray-900 px-4  rounded-md ">{foodType}</Text>
                    </TouchableOpacity>
                ))}
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     root: {
//         justifyContent: "center",
//         alignItems: "start",
//         marginTop: 50,
//         backgroundColor: "#FFF8F6",
//     },
//     title: {
//         width: "100%",
//         marginTop: 20,
//         fontSize: 25,
//         fontWeight: "bold",
//         marginLeft: "10%",
//     },
// });
