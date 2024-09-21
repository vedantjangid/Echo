import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <Image
          source={require("../Assets/logo.png")}
          style={{
            width: 31,
            height: 26,
            resizeMode: "contain",

            marginRight: 10,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Dooit</Text>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Image
          source={require("../Assets/search.png")}
          style={{
            height: 20,
            width: 20,
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
};

export default Header;
