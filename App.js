import { View, Text, SafeAreaView } from "react-native";
import Home_Null from "./Screens/Home_Null";
import Header from "./Components/Header";

export default function App() {
  return (
    <SafeAreaView style={{ marginLeft: 20, marginRight: 20 }}>
      <View>
        <Header />
        <Home_Null />
        <Text></Text>
      </View>
    </SafeAreaView>
  );
}
