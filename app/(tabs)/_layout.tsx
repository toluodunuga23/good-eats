import {View, Text} from 'react-native'
import { Link, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
export default function TabLayout() {
  return (
    <Tabs>
    <Tabs.Screen
    name ="index" options={{ headerShown: false }}/>
           <Tabs.Screen
        name="pantry"
        options={{
          title: "Pantry",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}