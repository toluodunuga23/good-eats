
import { Link } from 'expo-router'
import {
    ActivityIndicator,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
import { RecipeCard } from '../../components/recipe';
import { recipes } from '../../mock/receipe';
import { Recipe } from '../../types/receipe';
export default function Index() {
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFF8F6" }}>
        <ScrollView>
            <View className="px-6 pb-3 pt-2  rounded-b-[16px]  flex-col justify-between items-start h-[100px]">
                <View className="flex-col justify-between items-start mt-10 ml-2">
              <Text className="text-black text-3xl  ">
                Good Morning,
              </Text>
              <Text className="text-lg  text-black">James 👋</Text>
              </View>
            </View>
            <View className="flex-col   mt-4 ">
                <View className="flex-row justify-between items-start mb-4 mt-4 gap-4 px-6">
            <Text className="text-xl font-bold text-gray-900">
              Recommended for You
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-bold" style={{ color: "#E95322" }}>
                See All →
              </Text>
            </TouchableOpacity>

            </View>
            {/* Recipe Cards */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24 }}
              className="pl-0 mt-4"
            >
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe as Recipe} updateFavorites={() => {}}  />
              ))}
            </ScrollView>
          </View>

            </ScrollView>
            
    </SafeAreaView>
  )
}