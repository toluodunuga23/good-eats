import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import breakfast from "../../assets/images/english-breakfast.png";
import lunch from "../../assets/images/lunch-box.png";
import dinner from "../../assets/images/dinner-icon.png";
import dessert from "../../assets/images/dessert.png";
import { RecipeCard } from "../../components/recipe";
import { recipes } from "../../mock/receipe";
import { Recipe } from "../../types/receipe";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const widthScreen = Dimensions.get('window').width;

export default function Index() {
  const modalRef = useRef<Modalize>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const openModal = (recipeName: string) => {
    const recipe = recipes.find((r) => r.name === recipeName) as Recipe;
    setSelectedRecipe(recipe);
    modalRef?.current?.open();
  };

  const mealTypes = [{
    name: "Breakfast",
    image: breakfast,
  }, {
    name: "Lunch",
    image: lunch,
  }, {
    name: "Dinner",
    image: dinner,
  }, {
    name: "Dessert",
    image: dessert,
  }];

  const renderModalContent = () => {
    if (!selectedRecipe) return null;

    return (
      <View style={modalStyles.content}>
        {/* Recipe Image with Back Button */}
        <View style={modalStyles.imageContainer}>
          {selectedRecipe.imageUrl && (
            <Image
              source={{ uri: selectedRecipe.imageUrl }}
              style={modalStyles.image}
              resizeMode="cover"
            />
          )}
          {/* Back Button */}
          <TouchableOpacity style={modalStyles.backButton} onPress={() => modalRef.current?.close()}>
            <Ionicons name="arrow-back" size={20} color="#E95322" />
          </TouchableOpacity>
        </View>

        <View style={modalStyles.body}>
          {/* Header */}
          <View style={modalStyles.header}>
            <Text style={modalStyles.title}>{selectedRecipe.name}</Text>
            <View style={modalStyles.badges}>
              <View style={modalStyles.badge}>
                <Ionicons name="time-outline" size={16} color="#E95322" />
                <Text style={modalStyles.badgeText}>{selectedRecipe.time} min</Text>
              </View>
              <View style={modalStyles.badge}>
                <Ionicons name="flame" size={16} color="#E95322" />
                <Text style={modalStyles.badgeText}>{selectedRecipe.cuisine}</Text>
              </View>
              {selectedRecipe.pantryMatch && (
                <View style={[modalStyles.badge, { backgroundColor: selectedRecipe.pantryMatch >= 80 ? '#dcfce7' : '#fee2e2' }]}>
                  <View style={[modalStyles.dot, { backgroundColor: selectedRecipe.pantryMatch >= 80 ? '#22c55e' : '#ef4444' }]} />
                  <Text style={[modalStyles.badgeText, { color: selectedRecipe.pantryMatch >= 80 ? '#166534' : '#991b1b' }]}>
                    {selectedRecipe.pantryMatch}% Match
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Description */}
          {selectedRecipe.description && (
            <View style={modalStyles.section}>
              <Text style={modalStyles.sectionTitle}>Description</Text>
              <Text style={modalStyles.description}>{selectedRecipe.description}</Text>
            </View>
          )}

          {/* Ingredients */}
          <View style={modalStyles.section}>
            <Text style={modalStyles.sectionTitle}>Ingredients</Text>
            <View style={modalStyles.ingredientsList}>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <View key={index} style={modalStyles.ingredientItem}>
                  <View style={modalStyles.ingredientBullet} />
                  <Text style={modalStyles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Instructions */}
          {selectedRecipe.instructions && (
            <View style={modalStyles.section}>
              <Text style={modalStyles.sectionTitle}>Instructions</Text>
              <Text style={modalStyles.instructions}>{selectedRecipe.instructions}</Text>
            </View>
          )}

          {/* Add to Grocery Button */}
          <TouchableOpacity style={modalStyles.addButton}>
            <Ionicons name="cart-outline" size={20} color="#fff" />
            <Text style={modalStyles.addButtonText}>Add Ingredients to Grocery List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFF8F6" }}>
        <ScrollView>
          <View className="px-6 pb-3 pt-2  rounded-b-[16px]  flex-col justify-between items-start h-[100px]">
            <View className="flex-col justify-between items-start mt-10 ml-2">
              <Text className="text-black text-3xl  ">Good Morning,</Text>
              <Text className="text-lg  text-black">James 👋</Text>
            </View>
          </View>

          <Modalize
            ref={modalRef}
            modalHeight={SCREEN_HEIGHT * 0.85}
            handleStyle={{ backgroundColor: '#E95322', width: 40 }}
            modalStyle={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
          >
            {renderModalContent()}
          </Modalize>

          <View className="flex-col   mt-4 ">
            <View className="flex-row justify-between items-start mb-4 mt-4 gap-4 px-6">
              <View className="flex-col items-start gap-2">
              <Text className="text-xl font-bold text-gray-900">
                 🥘Recipes for You
              </Text>
              <Text className="text-xs  text-gray-500 ml-3">Last updated 1 hour ago</Text>
              </View>
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
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe as Recipe}
                  updateFavorites={() => { }}
                  openModal={(recipeName: string) => openModal(recipeName)}
                />
              ))}
            </ScrollView>
          </View>
          <Text className="text-xl font-bold text-gray-900 ml-4 mt-10">Browse Recipes</Text>
          <View style={testStyle.container}>
            <FlatList
              data={mealTypes}
              renderItem={({ item }) => (
                <View style={testStyle.card} className=" bg-white border border-gray-200  rounded-xl px-3 py-9 gap-2   ">
                  <Image source={item.image as ImageSourcePropType} style={{ height: 40, width: 40 }} />
                  <Text className="text-xl font-bold text-center" style={{ color: "black" }}>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.name}
              numColumns={2}
              columnWrapperStyle={testStyle.columnStyles}
            />
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.flaticon.com/free-icons/english-breakfast')}
              
              className="mt-2 mb-6"
            >
              <Text className="text-xs text-gray-400 text-center">
                Icons by Freepik - Flaticon
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F6',
  },
});

const modalStyles = StyleSheet.create({
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  body: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7ed',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#E95322',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#6b7280',
  },
  ingredientsList: {
    gap: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ingredientBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E95322',
  },
  ingredientText: {
    fontSize: 15,
    color: '#4b5563',
  },
  instructions: {
    fontSize: 15,
    lineHeight: 26,
    color: '#6b7280',
  },
  addButton: {
    backgroundColor: '#E95322',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 16,
    gap: 10,
    marginTop: 1,
    shadowColor: '#E95322',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
})

const testStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 23,

    // gap: 10,
  },
  card: {
    // width: widthScreen / 2 - 10,
    width: widthScreen / 2 - 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnStyles: {
    justifyContent: "space-between",
    marginVertical: 20,
  }
})