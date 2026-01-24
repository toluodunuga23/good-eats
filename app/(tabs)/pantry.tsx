import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Pantry = () => {
  const vegatables = [
    {
      name: "Carrots",
      icon: "🥕",
      quantity: 4,
      status: "In Stock",
      image: "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg",
    },
    {
      name: "Tomatoes",
      icon: "🍅",
      quantity: 4,
      status: "low",
      image:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
    },
    {
      name: "Onions",
      icon: "🧅",
      quantity: 2,
      status: "low",
      image:
        "https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg",
    },
    {
      name: "Garlic",
      icon: "🧄",
      quantity: 3,
      status: "low",
      image:
        "https://images.pexels.com/photos/4197492/pexels-photo-4197492.jpeg",
    },
    {
      name: "Potatoes",
      icon: "🥔",
      quantity: 5,
      status: "low",
      image:
        "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg",
    },
  ];

  const fruits = [
    {
      name: "Apple",
      icon: "🍎",
      quantity: 1,
      status: "low",
    },
    {
      name: "Banana",
      icon: "🍌",
      quantity: 1,
      status: "low",
    },
  ];

  const meats = [
    {
      name: "Chicken",
      icon: "🍗",
      quantity: 2,
      status: "low",
      image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg",
    },
    {
      name: "Beef",
      icon: "🥩",
      quantity: 1,
      status: "low",
      image: "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg",
    },
  ];

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#FFF8F6" }}>
      <Text className="text-xl font-bold text-center text-gray-900 px-4 mt-10 ">
        Pantry
      </Text>
      <Text className="text-md font-bold text-gray-900 px-4 mt-10">
        Vegatables
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 14, marginTop: 10 }}
      >
        {vegatables.map((vegatable, index) => (
          <TouchableOpacity
            key={index}
            className="bg-white rounded-3xl mr-5 w-[200px] shadow-md overflow-hidden max-h-[280px]"
            style={{
              borderWidth: 1,
              borderColor: "#fef2f2",
              shadowColor: "#E95322",
              shadowOpacity: 0.1,
            }}
            activeOpacity={0.9}
          >
            <View className="h-40 w-full bg-gray-100 relative">
              <Image
                source={{ uri: vegatable.image }}
                className="w-full h-full object-cover rounded-sm"
              />
            </View>
            <View className="flex-col justify-between items-center p-4 bg-white rounded-sm gap-4">
              <Text className="text-lg font-bold text-gray-900 leading-tight mb-1">
                {vegatable.name}
              </Text>
              <Text className="text-sm text-gray-500 leading-relaxed">
                Quantity: {vegatable.quantity} units
              </Text>
              <Text className="text-sm text-gray-500 leading-relaxed">
                Status: {vegatable.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text className="text-md font-bold text-gray-900 px-4 mt-10">Meats</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 14, marginTop: 10 }}
      >
        {meats.map((meat, index) => (
          <TouchableOpacity
            key={index}
            className="bg-white rounded-3xl mr-5 w-[200px] shadow-md overflow-hidden"
            style={{
              borderWidth: 1,
              borderColor: "#fef2f2",
              shadowColor: "#E95322",
              shadowOpacity: 0.1,
            }}
            activeOpacity={0.9}
          >
            <View className="h-40 w-full bg-gray-100 relative">
              <Image
                source={{ uri: meat.image }}
                className="w-full h-full object-cover rounded-sm"
              />
            </View>
            <View className="flex-col justify-between items-center p-4 bg-white rounded-sm gap-4">
              <Text className="text-lg font-bold text-gray-900 leading-tight mb-1">
                {meat.name}
              </Text>
              <Text className="text-sm text-gray-500 leading-relaxed">
                Quantity: {meat.quantity} units
              </Text>
              <Text className="text-sm text-gray-500 leading-relaxed">
                Status: {meat.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
};

export default Pantry;
