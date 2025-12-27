
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import "../../app/global.css";
import { Recipe } from "../../types/receipe";

export const RecipeCard = ({
  recipe,
  userId = "default-user",
  updateFavorites,
}: {
  recipe: Recipe;
  userId?: string;
  updateFavorites: (recipeId: string, newStatus: boolean) => void;
}) => {
  // Check if the current user has favorited this recipe
  const initialFavorited =
    recipe.favorites?.some((f: any) => f.userId === userId) ?? false;
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [isLoading, setIsLoading] = useState(false);

  const handleFavorite = async (recipeId: string) => {
    console.log("recipeId", recipeId);
    setIsLoading(true);
    try {
      // Optimistic update
      const newStatus = !isFavorited;
      setIsFavorited(newStatus);

      updateFavorites(recipeId, newStatus);

      // const result = await favoriteAPI.toggleFavorite(
      //   userId,
      //   recipeId,
      //   isFavorited // Pass CURRENT state (before toggle) to API
      // );

      // if (!result.success) {
      //   // Revert if failed
      //   setIsFavorited(!newStatus);
      //   Alert.alert("Error", result.error || "Failed to update favorites");
      // }
    } catch (error) {
      // Revert if error
      setIsFavorited(!isFavorited);
      console.error("Error toggling favorite:", error);
      Alert.alert("Error", "Could not connect to server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableOpacity
      className="bg-white rounded-3xl mr-5 w-[280px] shadow-md overflow-hidden"
      style={{
        borderWidth: 1,
        borderColor: "#fef2f2",
        shadowColor: "#E95322",
        shadowOpacity: 0.1,
      }}
      activeOpacity={0.9}
    >
      {/* Image Placeholder or Actual Image */}
      <View className="h-40 w-full bg-gray-100 relative">
        {recipe.imageUrl ? (
          <Image
            source={{ uri: recipe.imageUrl }}
            className="w-full h-full object-cover"
          />
        ) : (
          <View className="w-full h-full items-center justify-center bg-gray-50">
            <Ionicons name="restaurant" size={40} color="#cbd5e1" />
          </View>
        )}

        {/* Pantry Match Badge */}
        {recipe.pantryMatch && (
          <View
            className="absolute top-3 left-3 px-3 py-1.5 rounded-full flex-row items-center gap-1 shadow-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
          >
            <View
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  recipe.pantryMatch >= 80 ? "green" : "#ff0000",
              }}
            />
            <Text className="text-xs font-bold text-gray-700">
              {recipe.pantryMatch}% Pantry Match
            </Text>
          </View>
        )}

        {/* Favorite Button */}
        <TouchableOpacity
          onPress={() => handleFavorite(recipe.id)}
          disabled={isLoading}
          className="absolute top-3 right-3 p-2.5 rounded-full shadow-md"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        >
          <Ionicons
            name={isFavorited ? "heart" : "heart-outline"}
            size={20}
            color={isFavorited ? "#E95322" : "#9ca3af"}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="p-4 space-y-3">
        <View>
          <Text
            className="text-lg font-bold text-gray-900 leading-tight mb-1"
            numberOfLines={1}
          >
            {recipe.name}
          </Text>
          <Text
            className="text-sm text-gray-500 leading-relaxed"
            numberOfLines={2}
          >
            {recipe.description}
          </Text>
        </View>

        {/* Meta Info */}
        <View className="flex-row items-center justify-between pt-3 mt-1">
          <View className="flex-row items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full">
            <Ionicons name="time-outline" size={14} color="#E95322" />
            <Text className="text-xs font-bold" style={{ color: "#E95322" }}>
              {recipe.time} min
            </Text>
          </View>

          <View className="flex-row items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full">
            <Ionicons name="flame" size={14} color="#E95322" />
            <Text className="text-xs font-bold" style={{ color: "#E95322" }}>
              {recipe.cuisine}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
