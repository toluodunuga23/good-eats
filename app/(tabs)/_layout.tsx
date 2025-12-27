import {View, Text} from 'react-native'
import { Link, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: "#E95322",
      tabBarInactiveTintColor: "#000000",
    }}
    >
    <Tabs.Screen
    name ="index"
    options={{
      title: "Home",
      headerShown: false,
      tabBarIcon: ({ color }) => (
        <Ionicons name="home-outline" size={28} color={color} />
      ),
    }}
    />
           {/* <Tabs.Screen
        name="pantry"
        options={{
          title: "Pantry",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant-outline" size={28} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}