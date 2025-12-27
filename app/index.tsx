import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,

} from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/home.styles";
import "../app/global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      {/* <Text style={styles.text}>Hello World</Text> */}
      <Link href="/profile">
        <Text className="text-blue-500">Profile</Text>
      </Link>
    </View>

  );
}

{
  /* Image is a component that displays an image */
}
{
  /* <Image source={require("../assets/images/icon.png")} style={styles.image} /> */
}

{
  /* TouchableOpacity is a button that can be pressed */
}
{
  /* <TouchableOpacity onPress={() => alert("Hello World")}>
      <Text style={styles.text}>Click me</Text>
      </TouchableOpacity> */
}

{
  /* Pressable is a button that can be pressed */
}
{
  /* <Pressable onPress={() => alert("Hello World")}>
      <Text style={styles.text}>Click me</Text>
      </Pressable> */
}

